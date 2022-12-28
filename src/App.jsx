import { Navbar } from "./Components/navbar/Navbar";

import './App.css'
import { Intro } from "./Components/intro/Intro";
import { Services } from "./Components/Service/Services";
import { Experience } from "./Components/Experience/Experience";
import { Works } from "./Components/Works/Works";
import { Portafolio } from "./Components/Portafolio/Portafolio";
import { Testimonios } from "./Components/Testimonios/Testimonios";
import { Contact } from "./Components/Contact/Contact";




function App(){
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portafolio/>
    <Testimonios/>
    <Contact/>
    </div>
    
  );
} 

export default App; 