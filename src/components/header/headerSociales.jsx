import React from 'react'
import './header.css'
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";

const headerSociales = () => {

    return (
        <div className="redes-sociales">
            <span>redes profesionales</span>
            <a className="icono"><BsLinkedin /></a>
            <a className="icono"><SiGithub    /></a>
            <a className="icono"><BsCodeSlash  /></a>
        </div>
    )
}

export default headerSociales
