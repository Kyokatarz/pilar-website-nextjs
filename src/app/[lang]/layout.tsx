import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pilar Miralles · Composer - Sound Artist',
  description:
    "Hi, I'm Pilar Miralles - a Composer and Sound Artist. Welcome to my website!",
  icons: ['/favicon.ico'],
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang}>
      {/* insert favicon */}
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <Navbar lang={lang} />
        <main className='pt-14 min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
