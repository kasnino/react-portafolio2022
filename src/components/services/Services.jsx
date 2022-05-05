import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
    return (
        <section id="services" className=" container__services">
        <h5>What I Offer</h5>
            <div className="container__title">
                <h2 className="name-main">· Services · </h2>
            </div>

            <div className="container__card-services">
                <article className="service">
                    <div className="service__head">
                        <h3>UI Frontend</h3>
                    </div>

                    <ul className="services__list">
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>Uso diferentes componentes UI</p>
                        </li>
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>Lorem ipsum dolor sit amet</p>
                        </li>
                    </ul>

                </article>

                {/*fin del primer cards*/}

                <article className="service">
                    <div className="service__head">
                        <h3>Maquetacion</h3>
                    </div>

                    <ul className="services__list">
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>Manejo avanzado de Css</p>
                        </li>
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>Maquetando diseños siguiendo las buenas practicas  </p>
                        </li>
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>XD - PSD - FIGMA - SKETCH a codigo dinamico</p>
                        </li>
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>XD - PSD - FIGMA - SKETCH a codigo dinamico</p>
                        </li>
                    </ul>

                </article>
                {/*fin del segundo cards*/}

                <article className="service">
                    <div className="service__head">
                        <h3>Conexion Backend</h3>
                    </div>

                    <ul className="services__list">
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>Realizo Peticiones al servidor</p>
                        </li>
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>Get - Post -  Delete  - Put</p>
                        </li>
                        <li>
                        <BiCheck className="services__list-icon"/>
                        <p>Validando la DATA antes de mostrarla en el DOM</p>
                        </li>
                    </ul>

                </article>
            </div>
        </section>
   
    )
}

export default Services
