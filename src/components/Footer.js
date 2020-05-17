import React from 'react';
import styles from './styles/footer.module.css';
import ReactLogo from '../imgs/react.svg';
import GatsbyLogo from '../imgs/gatsby.svg';
// import s from './styles/footer.module.css';

const Footer = () => (

        <div className={styles.container}>
            <ul className={styles.footerLinksContainer}>
                <li>Github</li>
                <li>jfernando0911@gmail.com</li>
            </ul>
            <ul className={styles.footerCreatedContainer}>
                <p>Created with</p>
                <li><img src={ReactLogo} alt="react logo"/></li>
                <li><img src={GatsbyLogo} alt="gatsby logo"/></li>

            </ul>
        </div>
    );


export default Footer;




