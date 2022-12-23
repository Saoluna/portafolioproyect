import './Portafolio.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Calculadora from '../Portafolio/calculadora.png';
import Nitf from '../Portafolio/NITF.png';
import WebTriburo from '../Portafolio/webtributo.png';
import Coderhunt from '../Portafolio/coderhunt.png';
import 'swiper/css'


export const Portafolio =() =>{
    return(
        <div className="portafolio">
            {/*headding*/}
            <span>Proyectos Recientes</span>
            <span>Portfolio</span>

            {/*slider*/}
            <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portafolio-slider'>
                <SwiperSlide>
                    <img src={Calculadora} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Nitf} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={WebTriburo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Coderhunt} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
} 