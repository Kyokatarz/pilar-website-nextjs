'use client'

import React from 'react'
import Drawer from './Drawer'
import Hamburger from './Hamburger'

const MobileNavLinks = ({ lang }: { lang: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <ul className='md:hidden gap-x-16 justify-end px-6 items-center'>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} lang={lang} />
    </ul>
  )
}

export default MobileNavLinks
