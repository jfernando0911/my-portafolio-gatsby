import React from 'react';
import navbar from './styles/navbarStyles.module.css';
// import laptop from '../imgs/laptop.png';
import mouse from '../imgs/mouse.png';
import { Link } from 'gatsby';


const Navbar = () => {
    return (
        <div className={navbar.container}>
            <div className={navbar.logoContainer}><img src={mouse} alt={"emoji of a mouse"} /><h3>JFernando</h3></div>
            <ul className={navbar.ulContainer}>
                <div className={navbar.linkContainer}>
                    <Link to="/projects" className={navbar.linkLight}>Projects</Link>
                </div>
                <div className={navbar.linkContainer}>
                    <Link to="/contact" className={navbar.linkLight}>Contact</Link>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
