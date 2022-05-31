import React from 'react'
import './header.css'
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { gsap } from "gsap";
import { useEffect } from "react";
const headerSociales = () => {

    useEffect(() => {
        const redes = document.querySelector(".redes-sociales"); 
        console.log("ingreso header redes sopciales");
        gsap.from(redes, {
            y:-500,
            opacity: 0,
            duration:3,
            ease: "back"
          },"-=1");

    }, [])
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
