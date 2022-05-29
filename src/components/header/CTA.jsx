import React from 'react'
import CV from '../../assets/kristian_serrano_portafolio.pdf'
const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download target="_blank" className="btn">download CV</a>
            <a href="#contact" className="btn-primary btn">Let's Talk</a>
        </div>
    )
}

export default CTA
