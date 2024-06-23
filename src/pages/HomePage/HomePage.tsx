import Contact from './sections/Contact'
import HomePageMedia from './sections/HomePageMedia'
import Introduction from './sections/Introduction'
import ShortAbout from './sections/ShortAbout'

const HomePage = ({ lang }: { lang: string }) => {
  return (
    <>
      <Introduction lang={lang}/>
      <ShortAbout />
      <HomePageMedia />
      <Contact hideImage />
    </>
  )
}

export default HomePage
