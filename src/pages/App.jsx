import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/main.css'
import HeroSect from '../components/HeroSect'
import BrandLogos from '../components/BrandLogos'
import LearnMoreSect from '../components/LearnMoreSect'
const App = () => {
  return (
    <div>
      
      <HeroSect/>
      <BrandLogos/>
      <LearnMoreSect/>
    </div>
  )
}

export default App
