import { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export const Contact =() =>{
    const form =useRef();

    const sendEmail= (e) =>{
        e.preventDefault();
        emailjs.senForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) =>{
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
        <div className="contact-form">
            <div className="w-left">
                <div className="span">
                    <span>Ponerse en Contacto</span>
                    <span>Contáctame </span>
                    <div className='blur'style={{background: "rgb(238 210 255)"}}></div>
                </div>

                <div className="c-rigth">
                    <form>
                        <input type="text" name="user-name" className="user"  placeholder="Name" />
                        <input type="email" name="user-email" className="user"  placeholder="Email"/>
                        <textarea name="message" className="user" placeholder="Message" />
                        <input type="submit" value="Send" className="button"/>
                        <div className='blur'style={{background: "rgb(225, 146, 61)", top: '30rem', width: '100rem',height:'8rem', left: '11rem' }}></div>
                    </form>
                </div>
            </div>
        </div>
    )
}