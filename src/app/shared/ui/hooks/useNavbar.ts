import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useNavbar() {
  const [activePath, setActivePath] = useState<string>('')
  const menuItems = ['Por Inspeccionar', 'Revisados', 'Todos']
  const path = usePathname()

  useEffect(() => {
    setActivePath(path)
  }, [path])

  return {
    menuItems,
    activePath,
  }
}
