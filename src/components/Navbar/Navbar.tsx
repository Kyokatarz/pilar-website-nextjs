'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import icon from './assets/icon.svg'
import DesktopNavLinks from './DesktopNavLinks'
import MobileNavLinks from '../MobileNavLinks'

const Navbar = ({ lang }: { lang: string }) => {
  const navRef = useRef<HTMLElement>(null)
  const previousPosition = useRef(0)

  const changeNavbarVisibility = () => {
    console.log('scroll')
    const currentPosition = window.scrollY
    const delta = previousPosition.current - currentPosition
    const direction = delta < 0 ? 'down' : 'up'

    if (direction === 'down' && scrollY > 200)
      navRef.current?.classList.add('-top-20')
    if (direction === 'up') navRef.current?.classList.remove('-top-20')

    previousPosition.current = currentPosition
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarVisibility)

    return () => {
      window.removeEventListener('scroll', changeNavbarVisibility)
    }
  }, [])
  return (
    <nav
      className='top-0 transition-all w-full h-14 fixed flex flex-row items-center justify-between bg-white drop-shadow-md border-b-2 border-black'
      ref={navRef}
    >
      <a href='/#landing-introduction'>
        <Image src={icon} alt='To home page icon' className='ml-4' />
      </a>
      <DesktopNavLinks lang={lang} />
      <MobileNavLinks lang={lang} />
    </nav>
  )
}

export default Navbar
