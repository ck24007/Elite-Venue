import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import style from "./Navbar.module.css"
const Navbar = ({onHome, onWhy, onAbout, onContact}) => {
  
    const [open, setOpen]=useState(false)
    const navbarLabels=[{
        id:1,
        label:"Home",
        action:onHome
    },

    {
        id:2,
        label:"Why Stay Here",
        action:onWhy,
    },
{

    id:3,
    label:"About Us",
    action:onAbout,
},
{
    id:4,
    label:"Contact",
    action:onContact
}]
  return (
    <nav className="shadow-md fixed w-full top-0 z-50">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 text-2xl font-bold text-blue-900">
          <img src='/elite_venue_logo.png' className={style.logo}/>
           <span className='hidden md:inline-block font-logo text-3xl md:text-xl text-blue-800'> THE ELITE VENUE</span>
          </div>

          {/* Desktop Menu */}
          <div className='flex items-center space-x-10'>
          {navbarLabels && navbarLabels.map((item, index)=>(
            <div className="hidden md:flex space-x-8" key={item.id}>
            <div onClick={item.action} className="hover:text-blue-600 cursor-pointer">{item.label}</div>
          </div>
          ))}
          </div>
          <div className='flex items-center space-x-10'>
          <button className={style.bookBtn}>Book Now</button>
          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        </div>  
      </div>

      {/* Mobile Menu */}
      {open && (
        navbarLabels && navbarLabels.map((item,index)=>(
        <div className="md:hidden bg-white shadow-lg" key={item.id}>
          <div onClick={() =>{item.action(); setOpen(false)}} className="block px-4 py-3 border-b" to={item.path}>{item.label}</div>
        </div>)
        )
      )}
    </nav>
  )
}

export default Navbar
