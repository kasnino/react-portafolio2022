import React from "react";
import "./portfolio.css";
import { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const About = () => {
  const [proyectos, setProyectos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [numCards, setnumCards] = useState(4);
  const [gapCards, setGapCards] = useState(0);

  const [windowWidth, SetWindowWidth] = useState(window.innerWidth);
  const BASE_URL = "./proyectos.json";

  useEffect(() => {
    const handleResize = () => SetWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  {
    /*CREAR UNA FUNCION PARA SABER CUANDO 
      ES MOBILE - DESKTOP - TABLET */
    /*SE EJEUCAT LA PRIMERA VEz QUE CARGA EL COMPONENTES 
       uuiukjYA CUENTO CON LA VARIAble windowWidth Usestate */
  }

  useEffect(() => {
    updateResponsive();
  }, [windowWidth]);

  const updateResponsive = () => {
    let isMobile = windowWidth < 660;
    let isMediumTablet = windowWidth > 660;
    let isTablet = windowWidth < 1024;
    let isDesktop = windowWidth > 1024;
    let extraLarge = windowWidth > 1400;

    if (isMobile) {
      return (
        setnumCards(1), setGapCards(30)
      );
    }
    if (isTablet && windowWidth > 769) {
      return setnumCards(3), setGapCards(30)
    }
    if (isMediumTablet && windowWidth < 769) {
      return (
        setnumCards(2), setGapCards(35)
      );
    }
    if (isDesktop && windowWidth < extraLarge) {
      return (
        setnumCards(4), setGapCards(35)
      );
    }
    if (extraLarge) {
      return (
        setnumCards(5),
        setGapCards(20),
        console.log("ExtraDesktop: " + numCards)
      );
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchProjects = async () => {
      try {
        await fetch(`${BASE_URL}`)
          .then((res) => res.json())
          .then((data) => {
            setProyectos(data.projects);
            setLoading(false);
          });
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

  //  const [proyectos, setProyectos] = useState(['1','2','3','4','1','2','3','4'])
  return (
    <section id="portfolio" className="container__portafolio">
      <h5>My recent Work</h5>
      <div className="container__title">
        <h2 className="name-main">· Portafolio ·</h2>
      </div>
      {/* <span className="text-light">
        {gapCards}--{windowWidth}
      </span> */}
      <div className="container-main">
        <Swiper
          autoplay
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="body__container--portafolio "
          spaceBetween={0}
          slidesPerView={numCards}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {proyectos.map((item, index) => (
            <SwiperSlide
              key={index}
              className="container__card--portafolio mini-card swiper-fixed-width-300"
            >
              <div className="head__portafolio--img">
                <img src={item.ruta} className="card__img" alt="" />
              </div>

              <div className="body__portafolio--card">
                <h4 className="">· {item.title} ·</h4>
                <small>
                  {" "}
                  <h5 className="text__light--card">
                    {item.subtitle} /
                    <strong className="empresa__portafolio">
                      {item.empresa}
                    </strong>
                  </h5>{" "}
                </small>
              </div>
              <div className="link__portafolio--card">
                <a href={item.link} target="_blank" className="demo__projects">
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
                {item.tecnologiaImg.map((image, index) => (
                  <img
                    className=""
                    key={index}
                    src={`./tecnologi/${image}`}
                    alt=""
                  />
                ))}
              </div>
              <span className="container__footer--card">
                <h3>#{index + 1}</h3>
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;
