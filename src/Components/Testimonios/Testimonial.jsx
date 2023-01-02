import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../assets/profilePic1.png';
import profilePic2 from '../../assets/profilePic2.png';
import profilePic3 from '../../assets/profilePic3.png';
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';


export const Testimonial =() => {
    const clients =[
        {
        img: profilePic1,
        review: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, autem vitae temporibus velit cumque nisi quisquam amet nesciunt veritatis accusantium et aperiam consequuntur, reiciendis sit numquam quo? Harum, a voluptatibus!",
        },
        {
        img: profilePic2,
        review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, autem vitae temporibus velit cumque nisi quisquam amet nesciunt veritatis accusantium et aperiam consequuntur, reiciendis sit numquam quo? Harum, a voluptatibus!",
        },
        {
        img: profilePic3,
        review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, autem vitae temporibus velit cumque nisi quisquam amet nesciunt veritatis accusantium et aperiam consequuntur, reiciendis sit numquam quo? Harum, a voluptatibus!",
        },
    ];

    return(
      <div className="t-wrapper">
          <div className="t-heading">
                <span>Clientes que obtienen</span>
                <span>Trabajos Excepcionales</span>
                 <span>De mi...</span>

                 <div className='blur'style={{background: "rgb(238 210 255)"}}></div>
                 <div className='blur'style={{background: "rgb(225, 146, 61)", top: '30rem', width: '100rem',height:'8rem', left: '11rem' }}></div>
          </div>

                {/*slider*/}
             <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable: true}}
                >
                {clients.map((client, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                              <img src={client.img} alt="" />
                              <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
             </Swiper>
        </div>
      );
};