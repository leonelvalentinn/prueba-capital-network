'use client'

import { Title } from '../components/Title'
import { CardVehicle } from '@/app/shared/ui/CardVehicle'
import useVehicles from '../../shared/hooks/useVehicles'
import { CardSkeleton } from '@/app/shared/ui/CardSkeleton'
import { ModalForm } from '../components/ModalForm'
import { useState } from 'react'

export const InspectView = () => {
  const [addVehicle, setAddVehicle] = useState(false)
  const { vehicles, loading, handleSetNewVehicle } = useVehicles('Pendiente')

  const handleSetAddVehicle = (add: boolean) => {
    setAddVehicle(add)
  }

  return (
    <>
      <Title carsToInspect={vehicles.length} addVehicle={handleSetAddVehicle} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {loading
          ? Array.from({ length: 3 }).map((_, index) => <CardSkeleton key={index} />)
          : vehicles.map((vehicle) => <CardVehicle key={vehicle.id} vehicleData={vehicle} />)}
      </div>

      <ModalForm
        isOpen={addVehicle}
        onOpenChange={handleSetAddVehicle}
        handleSetNewVehicle={handleSetNewVehicle}
      />
    </>
  )
}
