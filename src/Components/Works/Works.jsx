import './Works.css'
import Educamas from '../../assets/educamaslogo1.png';
import { themeContext } from '../../Context';
import { useContext } from 'react'
import {motion} from 'framer-motion'
import CV from '../../assets/CVSeleneOcantoLuna.pdf'


export const Works= () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="works">
             {/* Left side*/}
             <div className='increible'>
                <span style={{color: darkMode? 'white': ''}} >Trabajos </span>
                <span>Marcas & Clientes</span>
                <span> Durante mi tiempo de aprendizaje en el Bootcamp adquirí toda mi experiencia en la organización Programate Academy Educamás
                </span>
                <button className="button s-button"> <a href={CV} download>Descargar CV</a></button>
                
                <div className='blur'style={{background: "rgb(238 210 255)"}}></div>
                <div className='blur'style={{background: "rgb(225, 146, 61)", top: '30rem', width: '100rem',height:'8rem', left: '11rem' }}></div>

                {/*rigth side*/}
                <div className="w-right">
                    <motion.div initial={{rotate: 45}}
                    whileInView={{rotate: 0}}
                    viewport={{margin: '-40px'}}
                    transition={{duration: 3.5, type: 'spring'}}
                    className="w-mainCircle">

                        <div className="w-secCircle">
                            <img src={Educamas} alt="" />
                         </div>
                        <div className="w-secCircle">
                             <img src={Educamas} alt="" />
                        </div>
                         <div className="w-secCircle">
                             <img src={Educamas} alt="" />
                        </div>
                         <div className="w-secCircle">
                             <img src={Educamas} alt="" />
                        </div>
                         <div className="w-secCircle">
                             <img src={Educamas} alt="" />
                         </div>
                 </motion.div>
                </div>

                {/*Background Circles*/}
                <div className="w-blackCircles  purpleCircle"></div>
                <div className="w-blackCircles  orangeCircle"></div>
            </div>
        </div>
    )
}