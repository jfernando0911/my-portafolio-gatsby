import React from 'react';
import navbar from './styles/navbarStyles.module.css';
// import laptop from '../imgs/laptop.png';
import mouse from '../imgs/mouse.png';
import { Link } from 'gatsby';


const Navbar = (props) => {
    console.log("Getting darkMode parameter from the parent: ", props.darkMode);
    return (
        <div className={props.darkMode ? navbar.containerDark : navbar.container}>
            <div className={navbar.logoContainer}><img src={mouse} alt={"emoji of a mouse"} /><h3>Fernan Design</h3></div>
            <ul className={navbar.ulContainer}>
                <div className={navbar.linkContainer}>
                    <Link to="/" className={props.darkMode? navbar.linkDark : navbar.linkLight}>About me</Link>
                </div>
                <div className={navbar.linkContainer}>
                    <Link to="/work" className={props.darkMode? navbar.linkDark : navbar.linkLight}>Work</Link>
                </div>
                <div className={navbar.linkContainer}>
                    <Link to="/contact" className={props.darkMode? navbar.linkDark : navbar.linkLight}>Contact</Link>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
