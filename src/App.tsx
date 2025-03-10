import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'
import { Header } from './sections/header'
import { Introduction } from './sections/introduction'
import { Copyright } from './sections/copyright'

function App() {

  return (
    <>
    {/* <Navigation/> */}
    <ParallaxProvider>
      <Header/>
    </ParallaxProvider>
    <Introduction/>
    {/* <Games/> */}
    {/* <About/> */}
    <Copyright/>
    </>
  )
}

export default App
