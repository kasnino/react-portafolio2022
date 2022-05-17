import React from 'react'
import './header.css'
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";

const headerSociales = () => {

    return (
        <div className="redes-sociales">
            <span>···redes profesionales···</span>
            <a className="icono" href="https://www.linkedin.com/in/kasnino/" target="_blank"><BsLinkedin /></a>
            <a className="icono" href="https://github.com/kasnino" target="_blank"><SiGithub    /></a>
            <a className="icono" href="https://codepen.io/kasnino" target="_blank"><BsCodeSlash  /></a>
        </div>
    )
}

export default headerSociales
