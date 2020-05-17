import React from 'react';
import containerStyles from './styles/containerStyles.module.css';
import Navbar from '../components/Navbar';
import Footer from './Footer';


const Container = ({ children }) => {


  return (

    <div className={containerStyles.container}>
      <Navbar />
      <div className={containerStyles.childrenContainer}>
        {children}

      </div>
      <Footer />
    </div>


  );
}

export default Container;
