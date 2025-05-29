import { LightStatus } from '@/app/const/inspectionStatus'
import { addToast } from '@heroui/react'
import { redirect, usePathname } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function useInspectionForm(inspectionPoints: {
  frontLights: boolean
  rearLights: boolean
  batteryLevel: boolean
  tirePressure: boolean
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [frontLightsStatus, setFrontLightsStatus] = useState<LightStatus | ''>('')
  const [rearLightsStatus, setRearLightsStatus] = useState<LightStatus | ''>('')

  const pathname = usePathname()

  const carId = pathname.split('/').pop() || ''

  const handleFrontLightsChange = (status: LightStatus | '') => {
    setFrontLightsStatus(status)
  }

  const handleRearLightsChange = (status: LightStatus | '') => {
    setRearLightsStatus(status)
  }

  const saveInspectionPoints = () => {
    setIsLoading(true)
    fetch(`http://localhost:3001/vehicles/${carId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'Completado',
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al actualizar los puntos de inspección')
        }
        return response.json()
      })
      .then((data) => {
        addToast({
          title: 'Éxito',
          description: 'Puntos de inspección guardados correctamente.',
          color: 'success',
        })
        console.log('Datos actualizados:', data)
      })
      .catch((error) => {
        console.error('Error al guardar los puntos de inspección:', error)
        addToast({
          title: 'Error',
          description: 'No se pudieron guardar los puntos de inspección.',
          color: 'danger',
        })
      })
      .finally(() => {
        setIsLoading(false)
        redirect('/')
      })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))

    if (inspectionPoints.frontLights && !frontLightsStatus) {
      addToast({
        title: 'Error',
        description: 'Por favor, selecciona el estado de las luces frontales.',
        color: 'danger',
      })

      return
    }

    if (inspectionPoints.rearLights && !rearLightsStatus) {
      addToast({
        title: 'Error',
        description: 'Por favor, selecciona el estado de las luces traseras.',
        color: 'danger',
      })

      return
    }

    console.log('Datos de inspección enviados:', {
      ...data,
      frontLightsStatus,
      rearLightsStatus,
    })

    saveInspectionPoints()
  }

  return {
    frontLightsStatus,
    rearLightsStatus,
    isLoading,
    onSubmit,
    handleFrontLightsChange,
    handleRearLightsChange,
  }
}
