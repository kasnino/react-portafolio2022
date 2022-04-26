import React from 'react'
import './nav.css'
import menu from '../../assets/icons-outline-element-3.svg'
import education from '../../assets/icons-outline-archive-book-white.svg'
import perfil from '../../assets/icons-outline-user-octagon-white.svg'
import proyects from '../../assets/icons-outline-award-blue.svg'
import home from '../../assets/gyph-comunication.svg'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home')
    return (
        <nav className="nav-main ">
              <a  
              href="#about" 
              onClick={()=> setActiveNav('#about')}
              className={activeNav === '#about' ? 'active' : ''}       
              >
             <img src={perfil} alt="" width="30px"/>
            </a>
             <a href="#experience" 
                className={activeNav === '#experience' ? 'active' : '' } 
                onClick={()=> setActiveNav('#experience')}>
             <img src={education} alt="" width="30px"/>
            </a>
            <a  href="#" 
                className={activeNav === '#home' ? 'active' : '' } 
                onClick={()=> setActiveNav('#home')}
            >
             <img src={menu} className="btn-icono" width="40px" alt=""/>
            </a>
            <a  href="#portfolio" 
                className={activeNav === '#portfolio' ? 'active' : '' } 
                onClick={()=> setActiveNav('#portfolio')}
            >
             <img src={proyects} alt="" width="30px"/>
            </a>
       
             <a  
              href="#contact" 
              onClick={()=> setActiveNav('#contact')}
              className={activeNav === '#contact' ? 'active' : ''}       
              >
             <img src={home} alt="" width="30px"/>
            </a>
          
        </nav>
   
    )
}

export default Nav
