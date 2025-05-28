import { Vehicle } from '@/app/types/vehicle.interface'
import { useEffect, useState } from 'react'

export default function useVehicles(status: 'Pendiente' | 'Completado' | 'Todos') {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const handleSetNewVehicle = (newVehicle: Vehicle) => {
    setVehicles((prevVehicles) => [newVehicle, ...prevVehicles])
  }

  useEffect(() => {
    fetch(`http://localhost:3001/vehicles${status === 'Todos' ? '' : `?status=${status}`}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setVehicles(data)
      })
      .catch((error) => {
        console.error('Error fetching vehicles:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [status])

  return {
    vehicles,
    loading,
    handleSetNewVehicle,
  }
}
