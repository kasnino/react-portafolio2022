import React from "react";
import "./css/portfolio.css";
import { useState, useEffect } from "react";
import CardPortafolio from './CardPortafolio'
import Modal from './modal'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const About = () => {

  const [proyectos,   setProyectos]   = useState([]);
  const [isLoading,   setLoading]     = useState(true);
  const [numCards,    setnumCards]    = useState(4);
  const [gapCards,    setGapCards]    = useState(0);
  const [showModal,   setShowmodal]   = useState(false);
  const [IdProyecto, setIdProyecto]  = useState(0);
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

  const closeModal = () => {
    setShowmodal(false);
};

const getIdCardProjects = (newID) => {
    setIdProyecto(newID);
};

const handleOnClick = (idNew) => {

  setShowmodal(true),
  getIdCardProjects(idNew);
}

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
        setGapCards(20)
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


  return (
    
    <section id="portfolio" className="container__portafolio" >
       
      <h5>My recent Work</h5>
      <div className="container__title">
        <h2 className="name-main">· Portafolio ·</h2>
      </div>
      <div className="container-main">
      <Swiper
          autoplay
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="body__container--portafolio "
          spaceBetween={0}
          slidesPerView={numCards}
          pagination={{ clickable: true }}
          scrollbar= {{ draggable: true }}
        >
          
          {proyectos.map((item, index) => (
              <SwiperSlide
                  key={index}
                  onClick={() =>  handleOnClick(index)}
                  className="container__card--portafolio mini-card swiper-fixed-width-300">
                    <CardPortafolio proyectos={item} numero={index} />
              </SwiperSlide>
           ))}

       </Swiper>
       <Modal
            arrayProyectos={proyectos}  
            isOpen={showModal}
            closeModal={closeModal}
            IdProyecto={IdProyecto}
           >
          </Modal>
      </div>
   
    </section>
    
  );
};

export default About;
