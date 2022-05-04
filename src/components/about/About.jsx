import React from 'react'
import './about.css'
import { useState } from 'react'
import home  from '../../assets/icons-outline-award.svg'
import more  from '../../assets/icons-outline-more.svg'
import plus  from '../../assets/icons-solid-add-square.svg'
import fondo from '../../assets/carbon.svg'
import check from '../../assets/check.png'
import rostro from '../../assets/rostro.png'

   const About = () => {
          const [textoPerfil, setTextoPerfil] = useState([
          "Hola! 👋  Soy desarrollador frontend [ ReactJS, VueJS ], apasionado por las animaciones & los UI effects. ",
          "Me he enfocado en todo lo relacionado con la parte visual de una AppWeb, aprendiendo a dominar diferentes tecnologias.",
          "Me gusta usar y crear animaciones [ CSS / Sass / keyframes 💯] darle vida a los diferentes elementos",
          "Cuento con experiencia manipulando SVG animandolos segun los requerimientos."
       ]);

    return (
    <section id="about" className="container__about">
          <div className="container__title">
                <h2 className="name-main">· About me · </h2>
          </div>
            <div className="about__container">
                <div className="about__me">
                    <div className="about__me__img">
                      <img src={rostro} alt="foto de perfil"/>
                    </div>
                </div>
                <div className="about__contenido">
                    <div className="about__cards">
                          <article className="about__card">
                          <img src={home} alt="foto de perfil"/>
                            <h3>Experiencia</h3>
                         <img src={plus} width="20px" alt="foto de perfil"/><small>3 a#os</small>
                          </article>

                          <article className="about__card">
                          <img src={home} alt="foto de perfil"/>
                            <h3>Clientes</h3>
                            <img src={plus} width="15px" alt="foto de perfil"/><small>15</small>
                          </article>

                          <article className="about__card">
                          <img src={home} alt="foto de perfil"/>
                            <h3>Projects</h3>
                          <img src={plus} width="15px" alt="foto de perfil"/><small>15 Completados</small>
                          </article>
                    </div>

                     <p className="about__info">
                      {textoPerfil.map( (item, index)  => (
                          <li key={index}>
                               <img src={check} alt="" className="checket__lista" width="10px"/>
                               <span>{item}</span>
                          </li>
                        ))}
                     </p>
                      <a className="btn about__btn" href="#experience">Más Skills
                      <img src={more} alt="" className="" width="20px"/></a>
                </div>

            </div>
   </section>
  )
}

export default About
