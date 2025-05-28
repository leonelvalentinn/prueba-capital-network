import { InspectView } from './views/InspectView'

export const metadata = {
  title: 'Inspección Detalle',
  description: 'Detalles de la inspección seleccionada',
}

export default function InspectPage() {
  return (
    <div className='w-full flex justify-center items-center'>
      <InspectView />
    </div>
  )
}
