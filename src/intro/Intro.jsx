
import './Intro.css'
import Github from '../img/github.png';
import LinkedIn from '../img/linkedin.png';
import Instagram from '../img/instagram.png'
export const Intro= () =>{
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>!Hola¡ Soy</span>
                    <span>Selene Ocanto</span>
                    <span>Full Stack en Programación con gran nivel de experienciam produciendo Calidad de trabajos</span>
                </div>

                    <button className="button i-button">Contrátame</button>
                    <div className="i-icons">
                        <img src={Github} alt="" />
                        <img src={LinkedIn} alt="" />
                        <img src={Instagram} alt="" />
                    </div>
            </div>
            <div className="i-right">
                soy el lado derecho

            </div>
        </div>
    )
}

