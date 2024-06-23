const navItems = [
  {
    href: '/#landing-introduction',
    label: 'Home',
  },
  {
    href: '/about-me',
    label: 'About me',
  },
  {
    href: '/works',
    label: 'Works',
  },
  {
    href: '/media',
    label: 'Media',
  },
  {
    href: '/contact-me',
    label: 'Contact',
  },
]

export default function langNavGenerator(lang: string) {
  return navItems.map((item) => {
    return {
      ...item,
      href: `/${lang}${item.href}`,
    }
  })
}
