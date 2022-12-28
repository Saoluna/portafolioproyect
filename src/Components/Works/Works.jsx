import './Works.css'
import Upwork from '../../assets/Upwork.png';
import Amazon from '../../assets/amazon.png';
import Shopify from '../../assets/Shopify.png';
import Facebook from '../../assets/Facebook.png';
import Fiverr from '../../assets/fiverr.png';
export const Works= () =>{
    return(
        <div className="works">
             {/* Left side*/}
             <div className='increible'>
                <span>Trabajos </span>
                <span>Marcas & Clientes</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur 
                    <br/>
                   reprehenderit esse rerum repudiandae nulla odit reiciendis 
                   <br/>
                   reprehenderit esse rerum repudiandae nulla odit reiciendis 
                   <br/>
                   reprehenderit esse rerum repudiandae nulla odit reiciendis 
                </span>
                <button className="button s-button">Descargar CV</button>
                
                <div className='blur'style={{background: "rgb(238 210 255)"}}></div>
                <div className='blur'style={{background: "rgb(225, 146, 61)", top: '30rem', width: '100rem',height:'8rem', left: '11rem' }}></div>

                {/*rigth side*/}
                <div className="w-right">
                    <div className="w-mainCircle">

                        <div className="w-secCircle">
                            <img src={Upwork} alt="" />
                         </div>
                        <div className="w-secCircle">
                             <img src={Fiverr} alt="" />
                        </div>
                         <div className="w-secCircle">
                             <img src={Amazon} alt="" />
                        </div>
                         <div className="w-secCircle">
                             <img src={Shopify} alt="" />
                        </div>
                         <div className="w-secCircle">
                             <img src={Facebook} alt="" />
                         </div>
                 </div>
                </div>

                {/*Background Circles*/}
                <div className="w-blackCircles  purpleCircle"></div>
                <div className="w-blackCircles  orangeCircle"></div>
            </div>
        </div>
    )
}