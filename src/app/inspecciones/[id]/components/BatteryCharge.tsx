import { BatteryIcon } from '@/app/shared/ui/icons/BatteryIcon'
import { CardInspect } from './CardInspect'
import { Accordion, AccordionItem, Slider, Textarea } from '@heroui/react'
import { CameraIcon } from '@/app/shared/ui/icons'
import { FileDrop } from '@/app/shared/ui/FileDrop'

export const BatteryCharge = () => {
  return (
    <CardInspect
      title='Nivel de Carga de la Batería'
      icon={<BatteryIcon className='text-green-600' />}
    >
      <Slider
        className='w-full border-s-neutral-800 text-neutral-800'
        color='foreground'
        classNames={{
          base: 'w-full',
          filler: 'bg-neutral-800',
          labelWrapper: 'mb-2',
          label: 'font-medium text-default-700 text-medium',
          value: 'font-medium text-default-500 text-small',
          thumb: [
            'transition-size',
            'bg-neutral-400',
            'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
            'data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6',
          ],
          step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
        }}
        maxValue={1}
        minValue={0}
        showTooltip
        name='batteryCharge'
        defaultValue={0.0}
        formatOptions={{ style: 'percent' }}
        label='Nivel de carga'
        marks={[
          {
            value: 0.2,
            label: '20%',
          },
          {
            value: 0.5,
            label: '50%',
          },
          {
            value: 0.8,
            label: '80%',
          },
        ]}
        size='sm'
        step={0.01}
      />

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
            name='batteryComments'
            fullWidth
            label='Comentarios de la Inspección'
            placeholder='Describe los hallazgos, condiciones observadas, recomendaciones...'
          />
        </AccordionItem>
      </Accordion>
    </CardInspect>
  )
}
