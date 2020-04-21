import React, {useState, useEffect} from 'react';
import containerStyles from './styles/containerStyles.module.css';
import Navbar from '../components/Navbar';
import Footer from './Footer';


const Container = ({ children }) => {

  // const getDarkValue = localStorage.getItem(JSON.parse('darkMode'));
  // console.log("Getting Dark Value", getDarkValue);


  const getInitialMode = localStorage.getItem('darkMode') || false;
  const [darkMode, setDarkMode]=useState(JSON.parse(getInitialMode));

  
  // console.log();


  useEffect(()=>{
  localStorage.setItem('darkMode', JSON.stringify(darkMode));

  // console.log(localStorage.getItem(JSON.parse('darkMode')));
  
  }, [darkMode]);

  

  return (

    // <div className={darkMode? containerStyles.container :containerStyles.containerDark}>
    <div className={darkMode? containerStyles.containerDark : containerStyles.container}>
      <Navbar darkMode={darkMode}/>
      {/* <input type="checkbox"/>z */}
  <button onClick={()=> setDarkMode(prevMode => !prevMode)}>{darkMode? "DarkMode": "LightMode"}</button>
      <div className={containerStyles.childrenContainer}>
        {children}

      </div>
      <Footer />
    </div>


  );
}

export default Container;
