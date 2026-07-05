import { useEffect, useRef, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Whytostay from './pages/Whytostay'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Facilities from './pages/Facilities'
function App() {

  const homeRef=useRef()
  const whytostayRef=useRef()
  const aboutRef=useRef()
  const contactRef=useRef()


  const [section, setSection]=useState(homeRef)
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <>
      <Navbar
        onHome={()=>{scrollToSection(homeRef)}}
        onWhy={()=>scrollToSection(whytostayRef)}
        onAbout={()=>scrollToSection(aboutRef)}
        onContact={()=>scrollToSection(contactRef)}
      />

      <div ref={homeRef}>
        <Home/>
      </div>
      <div ref={whytostayRef}>
        <Whytostay/>
        <Facilities/>
      </div>
      <div ref={aboutRef}>
        <AboutUs/>
      </div>
      <div ref={contactRef}>
        <ContactUs/>
      </div>
      </>
  )
}

export default App
