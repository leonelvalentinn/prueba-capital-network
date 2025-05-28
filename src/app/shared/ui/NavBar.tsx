'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'
import { CarIcon } from './icons/CarIcon'
import Link from 'next/link'
import useNavbar from './hooks/useNavbar'

export default function NavBar() {
  const { menuItems, activePath } = useNavbar()
  return (
    <Navbar position='static' className='bg-neutral-900 shadow-md' maxWidth='2xl'>
      <NavbarContent>
        <NavbarBrand>
          <Link href='/' className='flex gap-4 items-center'>
            <CarIcon className='w-10 h-10' />
            <p className='font-bold text-inherit'>PRUEBA</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link
            href='/'
            className={`border-b ${activePath === '/' ? 'border-b-neutral-50 font-semibold' : 'font-normal border-b-transparent'}`}
          >
            Por Inspeccionar
          </Link>
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Link
            href='/inspeccionados'
            className={`border-b ${activePath === '/inspeccionados' ? 'border-b-neutral-50 font-semibold' : 'font-normal border-b-transparent'}`}
          >
            Inspeccionados
          </Link>
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Link
            href='/todos'
            className={`border-b ${activePath === '/todos' ? 'border-b-neutral-50 font-semibold' : 'font-normal border-b-transparent'}`}
          >
            Todos
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden' justify='end'>
        <NavbarMenuToggle className='sm:hidden' />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              }
              href='#'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
