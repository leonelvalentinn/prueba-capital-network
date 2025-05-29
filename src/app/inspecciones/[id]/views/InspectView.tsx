'use client'

import { VehicleInfo } from '../components/VehicleInfo'
import { CardSkeleton } from '@/app/shared/ui/CardSkeleton'
import { Button, Chip, Form } from '@heroui/react'
import { InspectLights } from '../components/InspectLights'
import { BatteryCharge } from '../components/BatteryCharge'
import { TiresPressure } from '../components/TiresPressure'
import { CheckIcon } from '@/app/shared/ui/icons'
import useVehicleInspection from '../hooks/useVehicleInspection'
import useInspectionForm from '../hooks/useInspectionForm'

export const InspectView = () => {
  const { carData, loading, inspectionPoints } = useVehicleInspection()
  const {
    frontLightsStatus,
    rearLightsStatus,
    isLoading,
    onSubmit,
    handleFrontLightsChange,
    handleRearLightsChange,
  } = useInspectionForm(inspectionPoints)

  return (
    <section className='w-full max-w-4xl'>
      {loading ? (
        <div className='w-full flex flex-col gap-6 justify-center items-center'>
          {Array.from({ length: 3 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className='w-full flex flex-col gap-6'>
          <VehicleInfo carData={carData} />
          <span className='flex flex-col items-center gap-4 md:flex-row'>
            <h2 className='text-2xl font-bold text-neutral-50'>Formulario de inspección</h2>
            <Chip variant='bordered'>Puntos específicos para {carData?.brand}</Chip>
          </span>

          <Form className='w-full flex flex-col gap-6' onSubmit={onSubmit}>
            {inspectionPoints.frontLights && (
              <InspectLights
                onChange={handleFrontLightsChange}
                selectedStatus={frontLightsStatus}
                title='Estado de las Luces Frontales'
              />
            )}

            {inspectionPoints.rearLights && (
              <InspectLights
                onChange={handleRearLightsChange}
                selectedStatus={rearLightsStatus}
                title='Estado de las Luces Posteriores'
              />
            )}

            {inspectionPoints.batteryLevel && <BatteryCharge />}

            {inspectionPoints.tirePressure && <TiresPressure />}

            <Button
              isLoading={isLoading}
              type='submit'
              color='success'
              className='text-neutral-50 self-end'
              radius='sm'
            >
              <CheckIcon className='h-5 w-5' />
              Completar Inspección
            </Button>
          </Form>
        </div>
      )}
    </section>
  )
}
