import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () =>{
    return(
        <div className="footer row">
            <div className="col-sm-12 col-md-4">
                <Link to="/about_us">about us</Link>   
                  
            </div>
            <div className="col-sm-12 col-md-4"> 
                <Link to="/contact_us">contact us</Link>
            </div>
            <div className="col-sm-12 col-md-4">
                <h4>follow us</h4>
                <Link to="https://www.instagram.com/astro_clinic/?hl=en" target="_blank">
                    <i className="fa fa-instagram"></i>
                </Link> 
            </div>
        </div>
    )
}
export default Footer;