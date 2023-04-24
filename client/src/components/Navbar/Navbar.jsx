import React, { useState } from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom';

const Menu = () => (
<>
<Link to ='/'><p><a href="#home">Home</a></p></Link>
<p><a href="#features">Services</a></p>
<p><a href="#possibility">Make Money</a></p>
<p><a href="#blog">Properties</a></p>
<p><a href="#wgpt3">Contact Us</a></p>
</>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="fh_navbar">
      <div className="fh_navbar-links">
        <div className="fh_navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="fh_navbar-links_container">
            <Menu />
        </div>
      </div> 
      <div className="fh_navbar-sign">
        <p>FredHomes</p>
        <button type="button">Conference</button>
      </div>
      <div className="fh_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="fh_navbar-menu_container scale-up-center">
          <div className="fh_navbar-menu_container-links">
            <Menu />
          </div>
          <div className="fh_navbar-menu_container-links-sign">
            <p>FredHomes</p>
            <button type="button">onference</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar