import React from 'react'
import "./css/portfolio.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

function CardPortafolio(props) {

    return (
        <div>
                <div className="head__portafolio--img">
                    <img src={props.proyectos.ruta} className="card__img" alt="" />
                </div>

                <div className="body__portafolio--card">
                    <h4 className="">· {props.proyectos.title} ·</h4>
                    <small>
                    {" "}
                    <h5 className="text__light--card">
                        {props.proyectos.subtitle} /
                        <strong className="empresa__portafolio">
                        {props.proyectos.empresa}
                        </strong>
                    </h5>{" "}
                    </small>
                </div>
                <div className="link__portafolio--card">
                    <a href={props.proyectos.link} target="_blank" className="demo__projects">
                    <AiOutlinePlusCircle
                        className="icono__plus"
                        color="#d2d2d2"
                    />
                    <p>Demo</p>
                    </a>
                    <a className="demo__projects">
                    <SiGithub className="icono__plus" color="#d2d2d2" />
                    <p>Github</p>
                    </a>
                </div>
              <div className="logos__tecnologias">
                {props.proyectos.tecnologiaImg.map((image, index1) => (
                    <img
                        className=""
                        key={index1}
                        src={`./tecnologi/${image}`}
                        alt=""
                    />
                ))}
              </div>
              <span className="container__footer--card">
                <h3>#{props.numero + 1}</h3>
              </span>
           
        
        </div>
    )
}

export default CardPortafolio
