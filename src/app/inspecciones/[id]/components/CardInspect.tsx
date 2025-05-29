import { Card, CardBody, CardHeader } from '@heroui/react'
import { ReactNode } from 'react'

export const CardInspect = ({
  children,
  title,
  icon,
}: {
  children: ReactNode
  title: string
  icon: ReactNode
}) => {
  return (
    <Card className='w-full bg-[#D4D4D8] text-neutral-800' radius='sm'>
      <CardHeader>
        <h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-2'>
          {icon}
          {title}
        </h3>
      </CardHeader>
      <CardBody className='overflow-y-hidden'>{children}</CardBody>
    </Card>
  )
}
