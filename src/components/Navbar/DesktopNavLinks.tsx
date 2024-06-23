import Link from 'next/link'
import langNavGenerator from '../../utils/langNavGenerator'

const DesktopNavLinks = ({ lang }: { lang: string }) => {
  const langNavItems = langNavGenerator(lang)
  return (
    <ul className='hidden text-black md:flex h-full flex-row gap-x-16 justify-end px-6 items-center'>
      {langNavItems.map((item) => (
        <Link href={item.href} key={item.href}>
          <li>{item.label}</li>
        </Link>
      ))}
    </ul>
  )
}

export default DesktopNavLinks
