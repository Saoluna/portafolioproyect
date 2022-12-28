
 import './Services.css'
 import Arcoiris from '../../Card/arcoiris.png'
 import Nubes from '../../Card/nubes.png'
 import Estrella from '../../Card/estrella.png'
 import { Card } from '../../Card/Card'


 export const Services= () =>{
    return (
        <div className="services">
            {/* Left side*/}
            <div className='increible'>
                <span>Mis Increíbles</span>
                <span>Servicios</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur 
                    <br/>
                   reprehenderit esse rerum repudiandae nulla odit reiciendis 
                </span>
                <button className="button s-button">
                     {/*Llamar al "a" para colocar el enlace de descarga entre{} y agg el dowland*/}
                        Descargar CV 
                    
                    </button>
                <div className='blur'style={{background: "rgb(238 210 255)"}}></div>
                <div className='blur'style={{background: "rgb(225, 146, 61)", top: '30rem', width: '100rem',height:'8rem', left: '11rem' }}></div>
            </div>

            {/*right side*/}
            <div className="cards">
                <div style={{left: '10rem'}}>
                    <Card emoji= {Arcoiris} headding ={'Diseño'} texto = {"Figma, Adobe, Sketch xD"}/>
                </div>
                {/*second card*/}
                <div style={{top: "12rem", left: "-4rem"}}>
                    <Card emoji={Nubes} headding={"Desarrollo"} detail={"Html, Css,JavaScript, React"} />
                </div>
                {/*3rd*/}
                <div style={{top: "19rem", left:"12rem"}}>
                    <Card emoji={Estrella} headding= {"IU/UX"}/>

                </div>
             </div>
        </div>
    )
}