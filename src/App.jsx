import { Navbar } from "./Components/navbar/Navbar";

import './App.css'
import { Intro } from "./intro/Intro";
import { Services } from "./Service/Services";
import { Experience } from "./Experience/Experience";


function App(){
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    </div>
    
  );
} 

export default App; 