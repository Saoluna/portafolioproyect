import { Navbar } from "./Components/navbar/Navbar";

import './App.css'
import { Intro } from "./Components/intro/Intro";
import { Services } from "./Components/Service/Services";
import { Experience } from "./Components/Experience/Experience";
import { Works } from "./Components/Works/Works";
import { Portafolio } from "./Components/Portafolio/Portafolio";
import { Contact } from "./Components/Contact/Contact";
import { Testimonial } from "./Components/Testimonios/Testimonial";
import { Footer } from "./Components/Footer/Footer";
import {themeContext} from './Context'
import { useContext } from "react";

function App(){
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ background : darkMode? 'black' : '', color : darkMode? 'white': '',  }} >
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portafolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
    
  );
} 

export default App; 