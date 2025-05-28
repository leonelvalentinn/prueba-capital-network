'use client'

import { Card, CardBody, CardHeader, Chip } from '@heroui/react'
import { CalendarIcon, CarIcon, PhoneIcon, UserIcon, WrenchIcon } from './icons'
import { Vehicle } from '@/app/types/vehicle.interface'
import Link from 'next/link'

export const CardVehicle = ({ vehicleData }: { vehicleData: Vehicle }) => {
  return (
    <Link
      href={vehicleData.status === 'Pendiente' ? `/inspecciones/${vehicleData.id}` : ''}
      className='no-underline h-full'
    >
      <Card
        key={vehicleData.id}
        className='transition hover:bg-neutral-200 bg-[#D4D4D8] h-full'
        radius='sm'
      >
        <CardHeader className='pb-3'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-lg font-semibold text-neutral-800'>
              {vehicleData.brand} {vehicleData.model}
            </span>
            <Chip
              color={vehicleData.status === 'Pendiente' ? 'warning' : 'success'}
              className='text-neutral-50'
            >
              {vehicleData.status}
            </Chip>
          </div>
        </CardHeader>

        <CardBody className='space-y-3'>
          <div className='flex items-center gap-2 text-sm text-neutral-800'>
            <CarIcon className='h-4 w-4' />
            <span className='text-neutral-800'>
              {vehicleData.year} • {vehicleData.plateNumber}
            </span>
          </div>

          <div className='flex items-center gap-2 text-sm'>
            <UserIcon className='h-4 w-4 text-neutral-800' />
            <span className='font-medium text-neutral-800'>{vehicleData.clientName}</span>
          </div>

          <div className='flex items-center gap-2 text-sm'>
            <PhoneIcon className='h-4 w-4 text-neutral-800' />
            <span className='text-neutral-800'>{vehicleData.clientPhone}</span>
          </div>

          <div className='flex items-center gap-2 text-sm'>
            <WrenchIcon className='h-4 w-4 fill-neutral-800' />
            <span className='text-neutral-800'>{vehicleData.service}</span>
          </div>

          <div className='flex items-center gap-2 text-sm'>
            <CalendarIcon className='h-4 w-4 text-neutral-800' />
            <span className='text-neutral-800'>
              Creado: {new Date(vehicleData.createdAt).toLocaleDateString('es-ES')}
            </span>
          </div>

          {vehicleData.observations && (
            <div className='mt-3 p-2 bg-neutral-50 rounded text-sm'>
              <span className='font-semibold text-neutral-800'>Observaciones:</span>
              <p className='text-neutral-800 mt-1'>{vehicleData.observations}</p>
            </div>
          )}
        </CardBody>
      </Card>
    </Link>
  )
}
