import React from "react";
import "./css/modal.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { IoIosCloseCircleOutline } from "react-icons/io";
import rostro from "../../assets/rostro.png";

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
                  <h2>· <strong className="id__project">#{IdProyecto+1}</strong> · {arrayProyectos[IdProyecto].title} ·</h2>

                  <span className="container__subTexto">
                    <h5> {arrayProyectos[IdProyecto].empresa} </h5> |<h5> {arrayProyectos[IdProyecto].subtitle}..</h5>|
                    <h5>· Vuejs ·</h5>
                  </span>

                  <div className="container__tecno">
                    <h3>Tecnologias&nbsp;:</h3>
                    <div className="logos__tecnologias--modal">
                      {arrayProyectos[IdProyecto].tecnologiaImg.map(
                        (image, index1) => (
                          <img
                            className="tecnology__info"
                            key={index1}
                            src={`./tecnologi/${image}`}
                            alt=""
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="container__information--projects">
                    <h3>
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
                    </h3>
                  </div>
                  <div className="link__portafolio--card">
                    <a href={arrayProyectos[IdProyecto].link} target="_blank" className="demo__projects">
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
