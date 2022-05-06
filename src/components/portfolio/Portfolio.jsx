import React from 'react'
import './portfolio.css'
import { useState, useEffect } from "react";
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { SiGithub } from "react-icons/si";
import plus  from '../../assets/quasar_icon_132057.svg'
import fondo from '../../assets/Kanojo-mo-Kanojo_banner_znolv6.0b1e4ee1.jpg'
import icon from '../../assets/tecnologi/css.svg'

   const About = () => {
    const [proyectos, setProyectos] = useState([])
    const [isLoading, setLoading] = useState(true)
    const  BASE_URL = './proyectos.json'

    useEffect(()=>{
      setLoading(true)
       const fetchProjects = async () => {
          try {
            await fetch(`${BASE_URL}`)
            .then((res)=>res.json())
            .then((data)=>{
               setProyectos(data.projects)
               setLoading(false)
               })
          } catch (err) {
            console.error(err);
          }
      };
      fetchProjects();
        },[]);


  //  const [proyectos, setProyectos] = useState(['1','2','3','4','1','2','3','4'])
    return (
    <section id="portfolio" className="container__portafolio">
        <h5>My recent Work</h5>
       <div className="container__title">
        <h2 className="name-main">· Portafolio ·</h2>
        </div>
            <div className="body__container--portafolio">
              { proyectos.map( (item, index)  => (
                <article key={index} className="container__card--portafolio">
                  <div className="head__portafolio--img">
                    <img src={item.ruta} className="card__img" alt=""/>
                  </div>

                  <div className="body__portafolio--card">
                 <h4 className="">· {item.title} ·</h4> 
                  <small> <h5 className="text__light--card">{item.subtitle} / 
                  <strong className="empresa__portafolio">{item.empresa}</strong></h5> </small>
                      </div>
                      <div className="link__portafolio--card">
                        <a href={item.link} target="_blank" className="demo__projects">
                          <AiOutlinePlusCircle className="icono__plus" color="#d2d2d2" />
                          <p>Demo</p>
                        </a>
                      <a className="demo__projects">
                          <SiGithub className="icono__plus" color="#d2d2d2" />
                          <p>Github</p>
                        </a>
                      </div>
                      <div className="logos__tecnologias">
                        { item.tecnologiaImg.map( (image, index)  => (
                          <img className="" key={index} src={`./tecnologi/${image}`} alt=""/>
                        ))}
                      </div>  
                </article> ))}
            </div>
   </section>
  )
}

export default About
