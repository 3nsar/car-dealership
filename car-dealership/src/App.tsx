import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Termin from './components/Termin'


const App = () => {
  return (
    <div>
      {/*<Navbar/> */}
      <Hero/>
      <About/>
      <Termin/>
    </div>
  )
}

export default App