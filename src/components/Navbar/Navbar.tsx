import React from 'react'
import Image from 'next/image'

import icon from './assets/icon.svg'
import DesktopNavLinks from './DesktopNavLinks'
import MobileNavLinks from '../MobileNavLinks'
// import DesktopNavLinks from './components/DesktopNavLinks'
// import MobileNavLinks from './components/MobileNavLinks'

const Navbar = ({ lang }: { lang: string }) => {
  return (
    <nav className='w-full h-14 fixed flex flex-row items-center justify-between bg-white drop-shadow-md border-b-2 border-black'>
      <a href='/#landing-introduction'>
        <Image src={icon} alt='To home page icon' className='ml-4' />
      </a>
      <DesktopNavLinks lang={lang} />
      <MobileNavLinks lang={lang} />
    </nav>
  )
}

export default Navbar
