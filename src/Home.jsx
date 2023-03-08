import React, { useEffect } from 'react'
import Services from "./Services"
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'
import Contact from "./Contact"
const Home = () => {
  const data = {
   abour:"I am a Full Stack Web Developer and Sern Stack Devloper"
  }

  const { updateHomePage } = useGlobalContext()
  useEffect(() => { 
    updateHomePage()
  },[])
  return (
    <>
      {/* <HeroSection/> */}
      <HeroSection {...data}/>
      <Services/>
      <Contact/>
    </>
  )
}

export default Home
