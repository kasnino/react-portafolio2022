import React from 'react'
import './about.css'
import me from '../../assets/bg-main.png'
import home from '../../assets/icons-outline-award.svg'
import plus from '../../assets/icons-solid-add-square.svg'
function About() {
  return (
    <section id="about" className="About">
        <h2 className="name-main">· About me · </h2>
            <div className="about__container">
                
                <div className="about__me">
                    <div className="about__me__img">
                      <img src={me} alt="foto de perfil"/>
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
                          <small>Contact</small>
                          </article>

                          <article className="about__card">
                          <img src={home} alt="foto de perfil"/>
                            <h3>Projects</h3>
                          <img src={plus} width="15px" alt="foto de perfil"/><small>15 Completados</small>
                          </article>
                    </div>
                     <p className="about__info">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam et voluptatem non illum dolores eveniet ex officiis facere explicabo enim repudiandae labore atque nobis, omnis sed similique facilis praesentium?
                     </p>

                      <a className="btn-primary btn about__btn">Let's Talk</a>
                </div>

            </div>
   </section>
  )
}

export default About
