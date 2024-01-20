import Contact from './sections/Contact'
import HomePageMedia from './sections/HomePageMedia'
import Introduction from './sections/Introduction'
import ShortAbout from './sections/ShortAbout'

const HomePage = () => {
  return (
    <>
      <Introduction />
      <ShortAbout />
      <HomePageMedia />
      <Contact />
    </>
  )
}

export default HomePage
