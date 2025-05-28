import { Vehicle } from '@/app/types/vehicle.interface'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useVehicleInspection() {
  const [carData, setCarData] = useState<Vehicle | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const pathname = usePathname()

  const carId = pathname.split('/').pop() || ''

  const getInspectionPoints = (brand: string | undefined) => {
    const points = {
      frontLights: false,
      rearLights: false,
      batteryLevel: false,
      tirePressure: false,
    }

    if (brand) {
      switch (brand) {
        case 'Nissan':
          points.frontLights = true
          points.rearLights = true
          break
        case 'Hyundai':
          points.batteryLevel = true
          points.tirePressure = true
          break
        case 'Mazda':
          points.frontLights = true
          points.rearLights = true
          points.batteryLevel = true
          break
      }
    }

    return points
  }

  const inspectionPoints = getInspectionPoints(carData?.brand)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3001/vehicles/${carId}`)
      .then((response) => response.json())
      .then((data) => {
        setCarData(data)
      })
      .catch((error) => {
        console.error('Error fetching car data:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [carId])

  return {
    carData,
    loading,
    inspectionPoints,
  }
}
