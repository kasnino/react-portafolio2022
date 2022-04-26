import React from 'react'
import CV from '../../assets/kristian-Serrano2021-Frontend-Developer-comprimido.pdf'
const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download target="_blank" className="btn">download CV</a>
            <a href="#conatct" className="btn-primary btn">Let's Talk</a>
        </div>
    )
}

export default CTA
