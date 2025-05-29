import { Vehicle } from '@/app/types/vehicle.interface'
import { phoneRegex, vinRegex } from '@/app/utils/utils'
import { addToast } from '@heroui/react'
import { FormEvent, useState } from 'react'

export default function useAddVehicle({
  onOpenChange,
  handleSetNewVehicle,
}: {
  onOpenChange: (isOpen: boolean) => void
  handleSetNewVehicle: (vehicle: Vehicle) => void
}) {
  const [loading, setLoading] = useState<boolean>(false)

  const saveVehicle = (newVehicle: Vehicle) => {
    fetch('http://localhost:3001/vehicles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVehicle),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        handleSetNewVehicle(data)
        onOpenChange(false)
      })
      .finally(() => {
        onOpenChange(false)
        setLoading(false)
      })
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const dataObj = Object.fromEntries(new FormData(e.currentTarget))

    const data: Pick<
      Vehicle,
      | 'brand'
      | 'plateNumber'
      | 'model'
      | 'observations'
      | 'clientName'
      | 'clientPhone'
      | 'service'
      | 'vin'
      | 'year'
    > = {
      brand: String(dataObj.brand),
      plateNumber: String(dataObj.licensePlate),
      model: String(dataObj.model),
      observations: String(dataObj.observations),
      clientName: String(dataObj.ownerName),
      clientPhone: String(dataObj.ownerPhone),
      service: String(dataObj.service),
      vin: String(dataObj.vin),
      year: Number(dataObj.year),
    }

    if (!phoneRegex.test(data.clientPhone)) {
      addToast({
        title: 'Número de teléfono inválido',
        description: 'El número de teléfono debe tener 10 dígitos.',
        color: 'danger',
      })
      setLoading(false)
      return
    }

    if (!vinRegex.test(data.vin)) {
      addToast({
        title: 'VIN inválido',
        description: 'El VIN debe tener 17 caracteres alfanuméricos, sin I, O, Q, ó Ñ.',
        color: 'danger',
      })
      setLoading(false)
      return
    }

    const newVehicle: Vehicle = {
      ...data,
      id: `${parseInt((Math.random() * 1000).toString(), 10)}`,
      createdAt: new Date().toISOString(),
      status: 'Pendiente',
    }

    saveVehicle(newVehicle)
  }

  return {
    loading,
    onSubmit,
    saveVehicle,
  }
}
