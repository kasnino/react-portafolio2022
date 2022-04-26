import React from 'react'
import linkedin from '../../assets/icons-outline-home-1-white.svg'
import './header.css'
const headerSociales = () => {
    return (
        <div className="redes-sociales">
            <span>redes profesionales</span>
            <img src={linkedin} alt="" className="btn-icono" width="45px"/>
            <img src={linkedin} alt="" width="45px"/>
            <img src={linkedin} alt="" width="45px"/>
        </div>
    )
}

export default headerSociales
