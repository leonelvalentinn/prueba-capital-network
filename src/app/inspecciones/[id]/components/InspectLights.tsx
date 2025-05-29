import { LightIcon } from '@/app/shared/ui/icons/LightIcon'
import { CardInspect } from './CardInspect'
import { Accordion, AccordionItem, Button, Textarea } from '@heroui/react'
import { CameraIcon } from '@/app/shared/ui/icons/CameraIcon'
import { FileDrop } from '@/app/shared/ui/FileDrop'
import { LightStatus } from '@/app/const/inspectionStatus'

const STATUS_OPTIONS: { label: LightStatus; color: 'success' | 'warning' | 'danger' }[] = [
  { label: LightStatus.Good, color: 'success' },
  { label: LightStatus.Recommended, color: 'warning' },
  { label: LightStatus.Required, color: 'danger' },
]

export const InspectLights = ({
  title,
  selectedStatus,
  onChange,
}: {
  title: string
  selectedStatus: LightStatus | ''
  onChange: (status: LightStatus) => void
}) => {
  return (
    <CardInspect title={title} icon={<LightIcon className='text-yellow-600' />}>
      <div className='w-full flex flex-col gap-4 md:flex-row'>
        {STATUS_OPTIONS.map((status) => (
          <Button
            key={status.label}
            fullWidth
            variant='solid'
            radius='sm'
            color={selectedStatus === status.label ? status.color : undefined}
            onPress={() => onChange(status.label)}
            className={
              selectedStatus === status.label ? 'text-neutral-50' : 'bg-neutral-50 text-neutral-800'
            }
          >
            {status.label}
          </Button>
        ))}
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
            name='lightComments'
            fullWidth
            label='Comentarios de la Inspección'
            placeholder='Describe los hallazgos, condiciones observadas, recomendaciones...'
          />
        </AccordionItem>
      </Accordion>
    </CardInspect>
  )
}
