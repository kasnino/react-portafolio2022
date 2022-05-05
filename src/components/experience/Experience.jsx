import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {BsAsterisk} from 'react-icons/bs'

const experience = () => {
    return (
        <section id="experience" className="experience container__experience">
                <h5>What Skills I Have</h5>
                <div className="container__title">
                <h2 className="name-main">· What Skills I Have · </h2>
            </div>

            <div className="sub__container--experience">
                 <div className="left__frontend">
                     <h3>Frontend experience</h3>
                     <div className="experience__contain">
                        <article className="experience__details">
                        <BsPatchCheckFill color="#d2d2d2"/>
                        <h4>Vuejs&nbsp;2x&nbsp;3x</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                         <article className="experience__details">
                         <BsPatchCheckFill color="#d2d2d2"/>
                        <h4>ReactJS</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                        <BsPatchCheckFill color="#d2d2d2"/>
                        <h4>Bootstrap</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                         <article className="experience__details">
                         <BsPatchCheckFill color="#d2d2d2"/>
                        <h4>Tailwinds</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                        <BsPatchCheckFill color="#d2d2d2"/>
                        <h4>Vuetify</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                         <article className="experience__details">
                         <BsPatchCheckFill color="#d2d2d2"/>
                        <h4>Html</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                         <BsPatchCheckFill color="#d2d2d2"/>
                        <h4>Css&nbsp;-&nbsp;Sass</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience__details">
                         <BsPatchCheckFill color="#d2d2d2"/>
                        <h4>Wordpress</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                     </div>
                 </div>
                 <div className="right__frontend">
                  <h3>Description experience</h3>
                  <div className="experience__contain--description">
                        <article className="experience__decriptions__details">
                        <BsAsterisk color="#d2d2d2"/>
                        <span className="text-light">Consumo de APIs usando Axios & Fetch</span>
                        </article>
                         <article className="experience__decriptions__details">
                         <BsAsterisk color="#d2d2d2"/>
                         <span className="text-light">Uso de Diferentes frameworks de Styles </span>
                        </article>
                        <article className="experience__decriptions__details">
                         <BsAsterisk color="#d2d2d2"/>
                         <span className="text-light">Traduciendo archivos ( xD - PSD - Figma ) </span>
                        </article>
                        <article className="experience__decriptions__details">
                         <BsAsterisk color="#d2d2d2"/>
                         <span className="text-light">Metodologias agiles </span>
                        </article>
                        <article className="experience__decriptions__details">
                         <BsAsterisk color="#d2d2d2"/>
                         <span className="text-light">GitHub, Gitflow</span>
                        </article>
                     </div>
                 </div>
            </div>
        </section>
    )
}

export default experience
