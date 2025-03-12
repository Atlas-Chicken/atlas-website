import './App.css'
import { Header } from './sections/header'
import { Introduction } from './sections/introduction'
import { Copyright } from './sections/copyright'
import { Navigation } from './sections/navigation'

function App() {

  return (
    <>
    <Header/>
    <Navigation/>
    <Introduction/>
    {/* <Games/> */}
    {/* <About/> */}
    <div style={{ height: "60vh" }}></div>
    <Copyright/>
    </>
  )
}

export default App
