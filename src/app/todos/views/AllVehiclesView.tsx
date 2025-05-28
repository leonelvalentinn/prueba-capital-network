'use client'

import useVehicles from '@/app/shared/hooks/useVehicles'
import { CardSkeleton } from '@/app/shared/ui/CardSkeleton'
import { CardVehicle } from '@/app/shared/ui/CardVehicle'

export const AllVehicleView = () => {
  const { vehicles, loading } = useVehicles('Todos')
  return (
    <>
      <div className='mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-neutral-50 mb-2'>{vehicles.length} Vehículos</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {loading
          ? Array.from({ length: 3 }).map((_, index) => <CardSkeleton key={index} />)
          : vehicles.map((vehicle) => <CardVehicle key={vehicle.id} vehicleData={vehicle} />)}
      </div>
    </>
  )
}
