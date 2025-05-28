import { TireIcon } from '@/app/shared/ui/icons'
import { CardInspect } from './CardInspect'
import { Input } from '@heroui/react'
import { INPUTS_TIRES_FRONT, INPUTS_TIRES_REAR } from '@/app/const/inputs'

export const TiresPressure = ({}) => {
  return (
    <CardInspect
      title='Nivel de Presión de los Neumáticos'
      icon={<TireIcon className='text-blue-600' />}
    >
      <div className='grid grid-cols-2 gap-6'>
        {/* Front Tires */}
        <div className='space-y-4'>
          <h4 className='font-medium text-neutral-700'>Llantas Frontales</h4>
          <div className='space-y-3'>
            {INPUTS_TIRES_FRONT.map((input) => (
              <div key={input.id}>
                <div className='flex items-center gap-2'>
                  <Input
                    isRequired
                    type='number'
                    name={input.name}
                    label={input.label}
                    placeholder={input.placeholder}
                    className='flex-1'
                    min='0'
                    max='60'
                    step='1'
                    radius='sm'
                    endContent={<span className='text-sm text-neutral-500 font-medium'>PSI</span>}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rear Tires */}
        <div className='space-y-4'>
          <h4 className='font-medium text-neutral-700'>Llantas Posteriores</h4>
          <div className='space-y-3'>
            {INPUTS_TIRES_REAR.map((input) => (
              <div key={input.id}>
                <div className='flex items-center gap-2'>
                  <Input
                    isRequired
                    type='number'
                    name={input.name}
                    label={input.label}
                    placeholder={input.placeholder}
                    className='flex-1'
                    min='0'
                    max='60'
                    step='1'
                    radius='sm'
                    endContent={<span className='text-sm text-neutral-500 font-medium'>PSI</span>}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-4 p-3 bg-neutral-50 rounded-lg'>
        <p className='text-sm text-neutral-800'>
          <strong>PSI:</strong> Pounds per square inch (Libras por pulgada cuadrada)
        </p>
      </div>
    </CardInspect>
  )
}
