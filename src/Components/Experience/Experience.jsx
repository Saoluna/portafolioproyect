import { themeContext } from '../../Context';
import { useContext } from 'react'
import './Experience.css'

export const Experience = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="experience" id='Experiencia'>
            <div className="archievement">
                <div className="circle" >5+</div>
                <span> Meses</span>
                <span>Experiencia</span>
            </div>
            <div className="archievement">
                <div className="circle">5+</div>
                <span>Completado</span>
                <span>Proyectos</span>
            </div>
            <div className="archievement">
                <div className="circle">5+</div>
                <span>Compañias</span>
                <span>Trabajos</span>
            </div>
        </div>
    )
}