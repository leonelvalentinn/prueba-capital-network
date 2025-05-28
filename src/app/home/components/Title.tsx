'use client'

import { Button } from '@heroui/react'
import { PlusIcon } from '../../shared/ui/icons/PlusIcon'

export const Title = ({
  carsToInspect,
  addVehicle,
}: {
  carsToInspect: number
  addVehicle: (add: boolean) => void
}) => {
  return (
    <div className='mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
      <div>
        <h1 className='text-2xl font-bold text-neutral-50 mb-2'>Vehículos por Inspeccionar</h1>
        <p className='text-gray-100'>{carsToInspect} vehículos pendientes de inspección</p>
      </div>
      <Button radius='sm' onPress={() => addVehicle(true)}>
        <PlusIcon className='h-4 w-4' />
        Nuevo Ingreso
      </Button>
    </div>
  )
}
