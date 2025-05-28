export const Footer = () => {
  return (
    <footer className='bg-neutral-900 text-white py-4'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Prueba Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
