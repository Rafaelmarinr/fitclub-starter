import React, { useState } from "react";
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from "react-scroll";
const Header = () => {

    const mobile = window.innerWidth<=768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)
    return ( 
        <div className="header">
            <a href="https://rafaelmarin.site/" target="_blank">
                <img src={Logo} alt="" className="logo" href=""/>
            </a>
            {menuOpened === false && mobile === true ? (
                <div
                    style={{backgroundColor: 'var(--appColor)', padding:'0.5rem', borderRadius: "5px", cursor: "pointer"}}
                    onClick={() =>{setMenuOpened(true)}}
                    >
                    
                    <img src={Bars} style={{width:'1.5rem', height:'1.5rem'}} />
                </div>
            ) : <ul className="header-menu">
            <li><Link
                onClick={()=> setMenuOpened(false)}
                to='hero'
                smooth={true}
            >Home</Link></li>
            <li onClick={()=> setMenuOpened(false)}><Link
                onClick={()=> setMenuOpened(false)}
                to='programs'
                smooth={true}
                >Programs</Link></li>
            <li onClick={()=> setMenuOpened(false)}><Link
                onClick={()=> setMenuOpened(false)}
                to='reasons'
                smooth={true}
                >Why us</Link></li>
            <li><Link
                onClick={()=> setMenuOpened(false)}
                to='testimonials'
                smooth={true}
            >Testimonial</Link></li>
        </ul>}
            
        </div>
     );
}
 
export default Header;