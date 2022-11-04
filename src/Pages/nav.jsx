import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {BsBookmarks} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {useState} from 'react'


const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BsBookmarks/></a>
      <a href="#services"  onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact"  onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillContacts/></a>
    </nav>
  )
}

export default Nav
