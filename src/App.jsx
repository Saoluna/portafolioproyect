import { Navbar } from "./Components/navbar/Navbar";

import './App.css'
import { Intro } from "./intro/Intro";
import { Services } from "./Service/Services";
import { Experience } from "./Experience/Experience";
import { Works } from "./Works/Works";
import { Portafolio } from "./Portafolio/Portafolio";
import { Testimonios } from "./Testimonios/Testimonios";
import { Contact } from "./Contact/Contact";



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