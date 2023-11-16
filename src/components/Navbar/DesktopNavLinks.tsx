import Link from 'next/link'

const DesktopNavLinks = () => {
  return (
    <ul className='hidden text-black md:flex h-full flex-row gap-x-16 justify-end px-6 items-center'>
      {/* Using <a> tag to prevent scrolling to top */}
      <a href='/#landing-introduction'>
        <li>Home</li>
      </a>
      <Link href='/about-me'>
        <li>About me</li>
      </Link>
      <Link href='/works'>
        <li>Works</li>
      </Link>
      <Link href='/media'>
        <li>Media</li>
      </Link>
      <Link href='/contact-me'>
        <li>Contact</li>
      </Link>
    </ul>
  )
}

export default DesktopNavLinks
