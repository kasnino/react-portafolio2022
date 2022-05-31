import React from 'react'
import CV from '../../assets/kristian_serrano_portafolio.pdf'
import { gsap } from "gsap";
import { useEffect } from "react";


const CTA = () => {

    useEffect(() => {
        const btnLeftAnimation  = document.querySelectorAll(".btn-download");
        const btnRightAnimation = document.querySelector(".btn-contacto");
        const timeline = gsap.timeline();
        console.log("ingreso header botones");
        timeline.from(btnLeftAnimation, {
            y:100,
            opacity: 0,
            duration: 3,
            ease: "expo",
            stagger: 0.3
          }, "+=2");
     
      
    }, [])

    
    return (
        <div className="cta">
            <a href={CV} download target="_blank" className="btn btn-download">download CV</a>
            <a href="#contact" className="btn-primary btn btn-download">Let's Talk</a>
        </div>
    )
}

export default CTA
