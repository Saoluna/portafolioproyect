
import './Intro.css'
import Github from '../../assets/github.png';
import LinkedIn from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png'
import Cielo from '../../assets/cielo.png'
import Icono from '../../assets/seleneimg.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';
import crown from '../../assets/crown.png'
import Sol from '../../assets/sol.png'
import { themeContext } from '../../Context';
import { useContext } from 'react'
import CV from '../../assets/CVSeleneOcantoLuna.pdf';

export const Intro= () =>{
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}} >!Hola¡ Soy</span>
                    <span>Selene Ocanto</span>
                    <span>Full Stack en Programación Junior </span>
                </div>

                    <button className="button i-button"> <a href={CV} download>Contrátame </a></button>

                    <div className="i-icons">
                        <a href="https://github.com/Saoluna">
                            <img src={Github} alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/selene-ocanto-5bb212252/">
                            <img src={LinkedIn} alt="" />
                        </a>
                        

                        <a href="https://www.instagram.com/saoluna_/">
                            <img src={Instagram} alt="" />
                        </a>
                    </div>
            </div>
            <div className="i-right"  >
                <img src={Cielo} alt="" />
                <img className='icono' src={Icono} alt="" />
                 <img className='sol' src={Sol} alt="" />
            </div>
             
            <div style={{top: "-4%", left: "68%"}} className='floating-Div'>
                <FloatingDiv  image={crown} txt1='Web' txt2='Developer' />
            </div>
              {/*blur divs*/}
            <div className='blur'style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur'style={{background: "rgb(225, 146, 61)", top: '30rem', width: '100rem',height:'8rem', left: '11rem' }}></div>
            
        </div>
    )
}

