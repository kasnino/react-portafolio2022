import React from 'react'
import './portfolio.css'
import fondo from '../../assets/carbon.svg'
import { useState } from 'react'
import plus  from '../../assets/quasar_icon_132057.svg'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { SiGithub } from "react-icons/si";

   const About = () => {
   const [proyectos, setProyectos] = useState(['1','2','3','4','1'])
    return (
    <section id="about" className="container__portafolio">
       <div className="container__title">
        <h2 className="name-main">· Portafolio ·</h2>
        </div>
            <div className="body__container--portafolio">
              { proyectos.map( (item, index)  => (
                <article key={index} className="container__card--portafolio">

                  <div className="head__portafolio--img">
                    <img src={fondo} className="card__img" alt=""/>
                  </div>

                  <div className="body__portafolio--card">
                  <h2 className="">· portafolio ·</h2> 
                 <small> <h4 className="text__light--card">subtitulo</h4> </small>
                  </div>
                  <div className="link__portafolio--card">
                    <span className="demo__projects">
                      <AiOutlinePlusCircle className="icono__plus" color="#d2d2d2" />
                      <p>Demo</p>
                    </span>
                   <span className="demo__projects">
                      <SiGithub className="icono__plus" color="#d2d2d2" />
                      <p>Code</p>
                    </span>
                  </div>

                  <div className="logos__tecnologias">
                     { proyectos.map( (item, index)  => (
                       <img key={index} src={plus} alt=""/>
                     ))}
                  </div>
                </article> ))}
            </div>
   </section>
  )
}

export default About
