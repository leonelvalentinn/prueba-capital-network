import { CalendarIcon, CarIcon, PhoneIcon, UserIcon, WrenchIcon } from '@/app/shared/ui/icons'
import { CardInspect } from './CardInspect'
import { Vehicle } from '@/app/types/vehicle.interface'
import { Divider } from '@heroui/react'
import { formatDate, formatDateTime } from '@/app/utils/formatDate'

export const VehicleInfo = ({ carData }: { carData: Vehicle | null }) => {
  return (
    <CardInspect title='Información del Vehículo' icon={<CarIcon className='h-7 w-7' />}>
      {carData && (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='font-semibold text-neutral-800 flex items-center gap-2'>
                <CarIcon className='h-4 w-4' />
                Datos del Vehículo
              </h3>

              <div className='grid grid-cols-2 gap-x-4 gap-y-3'>
                <div>
                  <span className='text-xs font-semibold text-neutral-600'>Marca</span>
                  <p className='font-semibold'>{carData.brand}</p>
                </div>
                <div>
                  <span className='text-xs font-semibold text-neutral-600'>Modelo</span>
                  <p className='font-semibold'>{carData.model}</p>
                </div>
                <div>
                  <span className='text-xs font-semibold text-neutral-600'>Año</span>
                  <p className='font-semibold'>{carData.year}</p>
                </div>
                <div>
                  <span className='text-xs font-semibold text-neutral-600'>Placa</span>
                  <p className='font-semibold'>{carData.licensePlate}</p>
                </div>
                <div className='col-span-2'>
                  <span className='text-xs font-semibold text-neutral-600'>VIN</span>
                  <div className='flex items-center gap-2'>
                    <p className='text-sm font-semibold'>{carData.vin}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='font-semibold text-neutral-800 flex items-center gap-2'>
                <UserIcon className='h-4 w-4 text-neutral-600' />
                Datos del Cliente
              </h3>

              <div className='space-y-3'>
                <div>
                  <span className='text-xs font-semibold text-neutral-600'>Nombre Completo</span>
                  <p className='font-semibold flex items-center gap-2'>
                    <UserIcon className='h-4 w-4 text-neutral-600' />
                    {carData.clientName}
                  </p>
                </div>
                <div>
                  <span className='text-xs font-semibold text-neutral-600'>Teléfono</span>
                  <p className='font-semibold flex items-center gap-2'>
                    <PhoneIcon className='h-4 w-4 text-neutral-600' />
                    {carData.clientPhone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Divider className='my-4' />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h3 className='font-semibold text-neutral-800 flex items-center gap-2 mb-3'>
                <WrenchIcon className='h-4 w-4' />
                Servicio Solicitado
              </h3>
              <div className='bg-neutral-50 p-3 rounded-lg'>
                <span className='text-xs font-semibold text-neutral-600'>Tipo de Servicio</span>
                <p className='font-semibold'>{carData.service}</p>

                {carData.observations && (
                  <div className='mt-2'>
                    <span className='text-xs font-semibold text-neutral-600'>
                      Observaciones del Cliente
                    </span>
                    <p className='text-neutral-800 mt-1'>{carData.observations}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className='font-semibold text-neutral-800 flex items-center gap-2 mb-3'>
                <CalendarIcon className='h-4 w-4' />
                Fecha y Hora de Ingreso
              </h3>
              <div className='bg-neutral-50 p-3 rounded-lg'>
                <span className='text-xs font-semibold text-neutral-600'>Fecha</span>
                <p className='font-semibold'>{formatDate(carData.createdAt)}</p>
                <div className='mt-2'>
                  <span className='text-xs font-semibold text-neutral-600'>Hora</span>
                  <p className='font-semibold mt-1'>{formatDateTime(carData.createdAt)}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </CardInspect>
  )
}
