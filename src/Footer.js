import React from 'react'
import './Footer.css'
import Container from '@material-ui/core/Container';
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
