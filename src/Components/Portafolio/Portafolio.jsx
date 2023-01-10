import './Portafolio.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Calculadora from '../../assets/calculadora.png';
import Nitf from '../../assets/NITF.png';
import WebTriburo from '../../assets/webtributo.png';
import Coderhunt from '../../assets/coderhunt.png';
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react'

export const Portafolio =() =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="portafolio" id='Portafolio'>
            {/*headding*/}
            <span style={{color: darkMode? 'white': ''}} >Proyectos Recientes</span>
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