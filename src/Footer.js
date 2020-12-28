import React from 'react'
import './Footer.css'
//className="col-sm"
function Footer() {
    return (
        <div className="footer__main">
                <p>
                    &copy;{new Date().getFullYear()} 
                </p>
        </div>
    )
}

export default Footer
