import { CameraIcon, TireIcon } from '@/app/shared/ui/icons'
import { CardInspect } from './CardInspect'
import { Accordion, AccordionItem, Input, Textarea } from '@heroui/react'
import { INPUTS_TIRES_FRONT, INPUTS_TIRES_REAR } from '@/app/const/inputs'
import { FileDrop } from '@/app/shared/ui/FileDrop'

export const TiresPressure = ({}) => {
  return (
    <CardInspect
      title='Nivel de Presión de los Neumáticos'
      icon={<TireIcon className='text-blue-600' />}
    >
      <div className='grid grid-cols-2 gap-6'>
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

      <Accordion
        variant='splitted'
        className='px-0 mt-4 text-neutral-800'
        itemClasses={{
          title: 'text-neutral-800',
        }}
        fullWidth
      >
        <AccordionItem
          key='1'
          aria-label='Evidencia Fotográfica'
          className='rounded-lg text-neutral-800'
          title='Evidencia Fotográfica'
          startContent={<CameraIcon className='text-neutral-800 w-6 h-6' />}
        >
          <FileDrop />
          <Textarea
            className='my-2'
            radius='sm'
            name='tiresComments'
            fullWidth
            label='Comentarios de la Inspección'
            placeholder='Describe los hallazgos, condiciones observadas, recomendaciones...'
          />
        </AccordionItem>
      </Accordion>
    </CardInspect>
  )
}
