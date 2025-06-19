import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HomeSection from './Components/Home'
import AboutUs from './Components/About'
import FeaturesSection from './Components/FeaturesSection'
import WhyChooseSection from './Components/WhyChooseSection'
import ReviewSlider from './Components/ReviewSlider'
import GymLocations from './Components/Googlemap'
import Trainers from './Components/Trainers'
import Footer from './Components/Footer'
import FranchiseForm from './Components/Franchiseform'
import Gallery from './Components/Gallery'
import FloatingIcons from './Components/Floating'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomeSection/>
      <AboutUs/>
      <FeaturesSection/>  
      <WhyChooseSection/>
      <ReviewSlider/>
      <FranchiseForm/>
      <Gallery/>  
      <GymLocations/> 
      <Trainers/>
      <Footer/>
      <FloatingIcons/>
    </div>
  )
}

export default App
