
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Navbar from './sections/navbar/Navbar'
import Loadout from './sections/loadout/Loadout'
import Biography from './sections/Biography/Biography'
import Footer from './sections/footer/Footer'
import Skins from './sections/Skins/Skins'


function App() {
  return (
    <main id='hero' className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <About />
      <Navbar />
      <Loadout />
      <Biography />
      <Skins />
      <Footer />
    </main>
  )
}

export default App