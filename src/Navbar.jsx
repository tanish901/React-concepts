import React from 'react'
import { Link } from "react-router-dom";
import './index.css'

export default function Navbar(){
  return (
    <div className ="nav">
    <div className='nav-left'>
      <Link to="/" className='logoLink'><button className='logo'><img src="public/vite.svg" alt="logo" /></button></Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contacts</Link>
    </div>
   
    <div className='nav-right'>
      <Link className='signupLink'><button className='signup'>Signup</button></Link>
      
    </div>

    </div>
  )
}

