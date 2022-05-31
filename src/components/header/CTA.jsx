import React from 'react'
import CV from '../../assets/kristian_serrano_portafolio.pdf'
import { gsap } from "gsap";
import { useEffect } from "react";


const CTA = () => {

    useEffect(() => {
        const btnLeftAnimation  = document.querySelector(".btn-download");
        const btnRightAnimation = document.querySelector(".btn-contacto");
        const timeline = gsap.timeline();

     
      
    }, [])

    
    return (
        <div className="cta">
            <a href={CV} download target="_blank" className="btn btn-download">download CV</a>
            <a href="#contact" className="btn-primary btn btn-contacto">Let's Talk</a>
        </div>
    )
}

export default CTA
