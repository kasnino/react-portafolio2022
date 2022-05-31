import React from "react";
import "./header.css";
import CTA from "./CTA";
import Redes from "./headerSociales.jsx";
import avatar from "../../assets/avatar-empty.png";
import arrow from "../../assets/icons-outline-arrow-down-1.svg";
import rostro from "../../assets/rostro.png";
import { gsap } from "gsap";
import { useEffect } from "react";



const Header = () => {
  useEffect(() => {
    console.log("UseEffect Header");
    const Titulo = document.querySelector(".titulo_Header");
    const Nombre = document.querySelector(".my-name");
    const subTitulo = document.querySelector(".subTitulo");
    const circleTec = document.querySelectorAll(".circle");
    const rostro = document.querySelector(".rostro");
    const timeline = gsap.timeline();

    const redes = document.querySelector(".scroll-abajo"); 
    gsap.from(redes, {
        y:500,
        opacity: 0,
        duration:2,
      });

    gsap.from(Titulo, {
      y: -50,
      opacity: 0,
      duration: 1.5,
    });

    gsap.fromTo(
      Nombre,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        yoyo: false,
        ease: true,
        repeat: 0,
        duration: 1,
      }
    );



  }, []);

  return (
    <header className="App-header container Header">
      <h5 className="text-second titulo_Header">Hi! I'm</h5>
      <h1 className="name-main my-name">
        ·&nbsp;Kristian&nbsp;·&nbsp;Serrano&nbsp;·
      </h1>
      <h5 className="text-second subTitulo">Frontend ·· Developer</h5>
      <CTA />
      <div className="perfil-img">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img src={rostro} className="rostro" alt="foto de perfil" />
      </div>
      <a href="#contact" className="scroll-abajo">
        Scroll Down···
        <img src={arrow} alt="foto de perfil" width="45px" />
      </a>
      <Redes />
    </header>
  );
};

export default Header;
