import React from 'react'
import './nav.css'
import menu from '../../assets/icons-outline-element-3.svg'
import education from '../../assets/icons-outline-archive-book-white.svg'
import perfil from '../../assets/icons-outline-user-octagon-white.svg'
import proyects from '../../assets/icons-outline-award-blue.svg'
import home from '../../assets/gyph-comunication.svg'
import { useState, useEffect } from 'react'
import { gsap } from "gsap";

const Nav = () => {

    useEffect(() => {
        const nav = document.querySelector(".nav-main");
        const icono = document.querySelectorAll(".icono-nav");
        console.log("icnono: "+ icono)
        
        gsap.from(nav, {
            y:120,
            x:0,
            opacity: 0,
            duration:2,
            ease: "back",
            yPercent: 100
        },"-=2");

        gsap.from(icono, {
            opacity: 0,
            duration:1,
            stagger: 0.2,
          },"-=1");
    }, [])

    const [activeNav, setActiveNav] = useState('#home')
    return (
        <nav className="nav-main ">
              <a 
              
              href="#about" 
              onClick={()=> setActiveNav('#about')}
              className={activeNav === '#about' ? 'active' : ''}       
              >
             <img src={perfil} alt="" className="icono-nav" width="30px"/>
            </a>
             <a href="#experience" 
                className={ activeNav === '#experience' ? 'active' : '' } 
                onClick={()=> setActiveNav('#experience')}>
             <img src={education} alt="" className="icono-nav"   width="30px"/>
            </a>
            <a  href="#" 
                className={ activeNav === '#home' ? 'active' : 'menu-btn' } 
                onClick={()=> setActiveNav('#home')}
            >
             <img src={menu} className="btn-icono icono-nav"  width="40px" alt=""/>
            </a>
            <a  href="#portfolio" 
                className={ activeNav === '#portfolio' ? 'active' : '' } 
                onClick={()=> setActiveNav('#portfolio')}
            >
             <img src={proyects} alt="" className="icono-nav"  width="30px"/>
            </a>
       
             <a  
              href="#contact" 
              onClick={()=> setActiveNav('#contact')}
              className={ activeNav === '#contact' ? 'active' : ''}       
              >
             <img src={home} alt="" className="icono-nav"   width="30px"/>
            </a>
          
        </nav>
   
    )
}

export default Nav
