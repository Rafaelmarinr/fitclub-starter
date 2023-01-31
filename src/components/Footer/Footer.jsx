import React from "react";
import './Footer.css';
import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkeding from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return ( 
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links"> 
                    <a href="https://github.com/rafaelmarinr" target="_blank">
                        <img src={GitHub} alt="" />
                    </a>
                    <a href="https://www.instagram.com/dev.rafaelmarin/" target="_blank">  
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/rafael-marin-b92275251/" target="_blank">
                        <img src={Linkeding} alt="" />
                    </a>
                </div>
                <a href="https://rafaelmarin.site/" target="_blank" className="logo-f">
                     <img src={Logo} alt="" />
                </a>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
     );
}
 
export default Footer;