import React from 'react'
import linkedin from '../../assets/icons-outline-home-1-white.svg'
import './header.css'
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

const headerSociales = () => {
    return (
        <div className="redes-sociales">
            <span>redes profesionales</span>
            <span className="icono"><BsLinkedin size="15px" /></span>
            <span className="icono"><SiGithub   size="25px" /></span>
            <img src={linkedin} alt="" width="45px"/>
        </div>
    )
}

export default headerSociales
