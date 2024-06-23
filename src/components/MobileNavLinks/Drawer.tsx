import Link from 'next/link'
import React from 'react'
import langNavGenerator from '../../utils/langNavGenerator'

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  lang: string
}

const Drawer = ({ isOpen, setIsOpen, lang }: Props) => {
  const open = isOpen ? 'translate-x-0' : 'translate-x-full'
  const langNavItems = langNavGenerator(lang)

  return (
    <div
      className={`bg-white h-screen w-64 fixed top-0 right-0 z-40 drop-shadow-lg border-l-2 border-black transition-transform ${open}`}
    >
      <ul className='flex flex-col mt-14 items-center h-full'>
        {langNavItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            onClick={() => setIsOpen(false)}
            className='w-full'
          >
            <div className='border-b-2 border-black w-full h-10 flex justify-center items-center'>
              <li>{item.label}</li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Drawer
