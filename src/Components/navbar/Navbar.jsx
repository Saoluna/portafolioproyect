import './Navbar.css'
import Inicio from '../../assets/inicio.svg'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'

export const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Saoluna</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
              <li><img src ={Inicio} alt="" /></li>
            </Link>
            <Link spy={true} to='Servicios' smooth={true} activeClass="activeClass">
            <li>Servicios</li>
            </Link>
            <Link spy={true} to='Experiencia' smooth={true} activeClass="activeClass">
            <li>Experiencia</li>
            </Link>
            <Link spy={true} to='Portafolio' smooth={true} activeClass="activeClass">
            <li>Portfolio</li>
            </Link>
            <Link spy={true} to='Testimonios' smooth={true} activeClass="activeClass">
            <li>Testimonios</li>
            </Link>
            <Link spy={true} to='Contactame' smooth={true} activeClass="activeClass">
            <li className="button">Contactame</li>
            </Link>
         </ul>
       </div>
      </div>
    </div>
  );
};


