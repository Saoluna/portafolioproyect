import './Portafolio.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Calculadora from '../../assets/calculadora.png';
import Nitf from '../../assets/NITF.png';
import WebTriburo from '../../assets/webtributo.png';
import Coderhunt from '../../assets/coderhunt.png';
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