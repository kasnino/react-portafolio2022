import React from "react";
import "./css/modal.css";
import "../../assets/animation/variable.css"
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { IoIosCloseCircleOutline } from "react-icons/io";
import rostro from "../../assets/rostro.png";
import parse from 'html-react-parser';

const modal = ({ isOpen, closeModal, arrayProyectos, IdProyecto }) => {
  return (
    <>
      {isOpen && (
        <section id="modal" className="container__modal">
          <div>
            <div className="container__description--Projects">
              <div className="icon__close--Modal">
                <div onClick={closeModal} className="container__btn--modal">
                  <IoIosCloseCircleOutline className="icono__close" size="80" />
                </div>
              </div>
              <div className="contenido__info__proyecto">
                <div className="info__left--description">
                  <h2>· <strong className="id__project bounceIn animated dura-1">#{IdProyecto+1}</strong> · {arrayProyectos[IdProyecto].title} ·</h2>
                  <span className="container__subTexto">
                    <h5> {arrayProyectos[IdProyecto].empresa} </h5> |<h5> {arrayProyectos[IdProyecto].subtitle}..</h5>|
                    <h5>·&nbsp;Vuejs&nbsp;·</h5> |&nbsp;&nbsp; 
                    <span className="fecha__proyecto">Fecha&nbsp;&nbsp;{arrayProyectos[IdProyecto].fecha}&nbsp;·</span>
                  </span>

                  <div className="container__tecno">
                    <h3>Tecnologias&nbsp;:</h3>
                    <div className="logos__tecnologias--modal">
                      {arrayProyectos[IdProyecto].tecnologiaImg.map(
                        (image, index1) => (
                          <img
                            className={`tecnology__info bounceIn animated dura-${index1+1}`}
                            key={index1}
                            src={`./tecnologi/${image}`}
                            alt=""
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="container__information--projects" 
                  >
                        <h3>{parse(arrayProyectos[IdProyecto].description)}</h3>
                    {/* <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt quidem vel ipsum asperiores? Odit sunt voluptates
                      unde porro, facere quo optio ducimus consequuntur.
                      Voluptatibus obcaecati veritatis repellendus assumenda,
                      fugit veniam.
                    </h3>
                    <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt quidem vel ipsum asperiores? Odit sunt voluptates
                      unde porro, facere quo optio ducimus consequuntur.
                      Voluptatibus obcaecati veritatis repellendus assumenda,
                      fugit veniam.
                    </h3> */}
                  </div>
                  <div className="link__portafolio--card">
                    <a href={arrayProyectos[IdProyecto].link} target="_blank" className="demo__projects animated bounceIn dura-2">
                    <AiOutlinePlusCircle
                        className="icono__plus "
                        color="#d2d2d2"
                    />
                    <p>Demo</p>
                    </a>
                    <a className="demo__projects animated bounceIn dura-3">
                    <SiGithub className="icono__plus" color="#d2d2d2" />
                    <p>Github</p>
                    </a>
                </div>
                </div>

                <div className="info__right--description"></div>
              </div>
            </div>
            {arrayProyectos[IdProyecto].ruta ? (
              <img
                src={arrayProyectos[IdProyecto].ruta}
                alt=""
                className="img_portada"
              />
            ) : (
              <img src={rostro} alt="" className="img_portada" />
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default modal;
