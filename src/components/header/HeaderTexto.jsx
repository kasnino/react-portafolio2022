import React from 'react'
import { gsap } from "gsap";
import { useEffect } from "react";


function HeaderTexto() {
    useEffect(() => {
        const Titulo = document.querySelectorAll(".titulo_Header");
        const linetime = gsap.timeline();
        console.log("ingreso headerTexto");
    
        linetime.from(Titulo, {
          y:-50,
          x:50,
          opacity: 0,
          duration: 1,
          ease: "expo",
          stagger: 0.5
        }, "+=1");
    
    
      }, []);
    return (
        <div>
            <h5 className="text-second titulo_Header">Hi! I'm</h5>
            <h1 className="name-main  titulo_Header">
                ·&nbsp;Kristian&nbsp;·&nbsp;Serrano&nbsp;·
            </h1>
            <h5 className="text-second subTitulo titulo_Header">Frontend ·· Developer</h5>
        </div>
    )
}

export default HeaderTexto
