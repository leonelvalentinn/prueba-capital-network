import { LightIcon } from '@/app/shared/ui/icons/LightIcon'
import { CardInspect } from './CardInspect'
import { Button } from '@heroui/react'

const STATUS_OPTIONS: {
  label: 'Buen Estado' | 'Cambio Recomendado' | 'Requiere Cambio'
  color: 'success' | 'warning' | 'danger'
}[] = [
  { label: 'Buen Estado', color: 'success' },
  { label: 'Cambio Recomendado', color: 'warning' },
  { label: 'Requiere Cambio', color: 'danger' },
]

export const InspectLights = ({
  title,
  selectedStatus,
  onChange,
}: {
  title: string
  selectedStatus: 'Buen Estado' | 'Cambio Recomendado' | 'Requiere Cambio' | ''
  onChange: (status: 'Buen Estado' | 'Cambio Recomendado' | 'Requiere Cambio') => void
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
    </CardInspect>
  )
}
