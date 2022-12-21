import './Navbar.css'
import Inicio from '../navbar/inicio.svg'

export const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Saoluna</div>
      <span>Toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
            <li><img src ={Inicio} alt="" /></li>
            <li>Servicios</li>
            <li>Experiencia</li>
            <li>Portfolio</li>
            <li>Testimonios</li>
         </ul>
       </div>
        <button className="button">
        Contáctame
        </button>
      </div>
    </div>
  );
};


