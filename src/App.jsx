import { Navbar } from "./Components/navbar/Navbar";

import './App.css'
import { Intro } from "./intro/Intro";
import { Services } from "./Service/Services";


function App(){
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    </div>
    
  );
} 

export default App; 