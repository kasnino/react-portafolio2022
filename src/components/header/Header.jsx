import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderTexto from "./HeaderTexto";
import Redes from "./headerSociales.jsx";
import avatar from "../../assets/avatar-empty.png";
import arrow from "../../assets/icons-outline-arrow-down-1.svg";
import rostro from "../../assets/rostro.png";
import { gsap } from "gsap";
import { useEffect } from "react";



const Header = () => {
  useEffect(() => {
    const redes = document.querySelector(".scroll-abajo"); 
    console.log("ingreso header main");
    gsap.from(redes, {
        y:500,
        opacity: 0,
        duration:2,
        ease: "back"
    }, "-=3");

  }, []);

  return (
    <header className="App-header container Header">
      <HeaderTexto />
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
