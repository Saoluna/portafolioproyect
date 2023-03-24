import './Contact.css'
import { themeContext } from '../../Context';
import { useContext } from 'react'
export const Contact =() =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
         <div className="contact-form">
             <div className="w-left">
                <div className="awesome">
                    <span  style={{color: darkMode? 'white': ''}}>Ponerse en contácto</span>
                    <br />
                    <span>Contáctame </span>
                
                 <div className='blur'style={{background: "rgb(238 210 255)"}}></div>
                
                </div>
             </div>

                <div className="c-rigth">
                    <form action="https://formsubmit.co/3e8ec3815beefdcb849e2482102fd62b" method="POST">
                        <input type="text" name="user_name" className="user"  placeholder="Nombre" />
                        <input type="email" name="user_email" className="user"  placeholder="Correo"/>
                        <textarea name="message" className="user" placeholder="Mensaje" />
                        <input type="submit" value="Enviar" className="button"/>
                        <div className='blur'style={{background: "rgb(225, 146, 61)", top: '30rem', width: '100rem',height:'8rem', left: '11rem' }}></div>
                    </form>
                </div>
         </div>
      );
};