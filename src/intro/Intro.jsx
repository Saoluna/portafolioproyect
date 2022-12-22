
import './Intro.css'
import Github from '../img/github.png';
import LinkedIn from '../img/linkedin.png';
import Instagram from '../img/instagram.png'
import Cielo from '../img/cielo.png'
import Icono from '../img/seleneimg.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';
import crown from '../img/crown.png'
import Sol from '../img/sol.png'
import Blur from '../img/purpleblur.png'



export const Intro= () =>{
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>!Hola¡ Soy</span>
                    <span>Selene Ocanto</span>
                    <span>Full Stack en Programación con gran nivel de experiencia; produciendo Calidad de trabajos</span>
                </div>

                    <button className="button i-button">Contrátame</button>

                    <div className="i-icons">
                        <a href="https://github.com/Saoluna">
                            <img src={Github} alt="github" />
                        </a>

                        <img src={LinkedIn} alt="" />

                        <a href="https://www.instagram.com/saoluna_/">
                            <img src={Instagram} alt="" />
                        </a>
                    </div>
            </div>
            <div className="i-right">
                <img src={Cielo} alt="" />
                <img src={Icono} alt="" />
            </div>
             <div className='sol' >
                <img src={Sol} alt="" />
            </div>
            <div style={{top: '10rem', left: '15%'}}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
            </div>
              {/*blur divs*/}
            <div className='blur'style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur'style={{background: "rgb(225, 146, 61)", top: '30rem', width: '100rem',height:'8rem', left: '11rem' }}></div>
            
        </div>
    )
}

