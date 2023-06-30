import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {FaCamera} from 'react-icons/fa'
const Navbar = () => {

    const [openNav, setOpenNav] = useState(false)
    function navOpen(){
        // console.log("clicked")
        setOpenNav(!openNav)
    }
  return (
    <div className='navbar__container'>
        <div className='navbar__items'>
            <div className="nav__left">
                <Link to='/'>
                    <img className='logo' src={Logo} alt={Logo} width={100}/>
                </Link>
            </div>

            <div id={openNav ? 'open' : 'close'} className='nav__mobile'>
                <NavLink className='nav__link' to='/'>Home</NavLink>
                <NavLink className='nav__link' to='gallery'>Gallery</NavLink>
                <NavLink className='nav__link' to='contact'>Contact</NavLink>
            </div>
            <div id={openNav ? 'open' : 'close'}>
                <a className='nav__social' href="https://instagram.com/stayjazzy_multimedia?igshid=MzRlODBiNWFlZA==" target='_blank'>
                    <BsInstagram />
                </a>
                <a className='nav__social' href="https://www.facebook.com/stayjpixels" target='_blank'>
                    <BsFacebook />
                </a>
            </div>
            
            <div className="nav__right">
                <NavLink className='nav__link' to='/'>Home</NavLink>
                <NavLink className='nav__link' to='gallery'>Gallery</NavLink>
                <NavLink className='nav__link' to='contact'>Contact</NavLink>
            </div>

            <div className="nav__center">
                <a className='nav__social' target='_blank' href="https://instagram.com/stayjazzy_multimedia?igshid=MzRlODBiNWFlZA==">
                    <BsInstagram />
                </a>
                <a className='nav__social' target='_blank' href="https://www.facebook.com/stayjpixels">
                    <BsFacebook />
                </a>
            </div>
        </div>
        <div className="hamburger" onClick={navOpen}>
            <FaCamera />
        </div>
    </div>
  )
}

export default Navbar