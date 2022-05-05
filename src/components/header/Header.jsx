import React from 'react'
import './header.css'
import CTA from './CTA'
import Redes from './headerSociales.jsx'
import avatar from '../../assets/avatar-empty.png'
import arrow from '../../assets/icons-outline-arrow-down-1.svg'
import rostro from '../../assets/rostro.png'

const Header = () => {
    return (
       <header className="App-header container Header">
                <h5 className="text-second">Hi! I'm</h5>
                <h1 className="name-main">· Kristian · Serrano ·</h1>
                <h5 className="text-second">Frontend ·· Developer</h5>
            <CTA/>
                <div className="perfil-img">
                    <img src={rostro} alt="foto de perfil"/>
                </div>
                <a href="#contact" className="scroll-abajo">Scroll Down 
                   <img src={arrow} alt="foto de perfil" width="45px"/>
                </a>
            <Redes/>
      </header>
    )
}

export default Header
 