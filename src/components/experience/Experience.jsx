import React from 'react'
import './experience.css'
import plus from '../../assets/icons-solid-add-square.svg'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
    return (
        <section id="experience" className="experience">
            <h5>What Skills I Have</h5>
            <h1>What Skills I Have</h1>
            <h2>My Experience</h2>

            <div className="container__experience">
                 <div className="left__frontend">
                     <h2>My Experience</h2>
                     <div className="experience__contain">
                        <article className="experience__details">
                        <img src={plus} alt=""/>
                        <h4>Vuejs</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                         <article className="experience__details">
                         <BsPatchCheckFill color="#d2d2d2"/>
                        <h4>Vuejs</h4>
                        <small className="text-light">Experienced</small>
                        </article>
                     </div>
                 </div>
                 <div className="right__frontend">
                  <h2>My Experience</h2>
                 </div>
            </div>
        </section>
    )
}

export default experience
