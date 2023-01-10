import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

import Wave from '../../assets/wave.png'
export const Footer =() => {
    return (
        <div className="footer">
            <img src={Wave} alt=""  style={{width: '100%'}}/>
            <div className="f-content">
                <span>Seleneocantoluna@gmail.com</span>
                <div className="f-icons">
                    <Insta color='gray' size='3rem'/>
                    <Facebook color='gray' size='3rem'/>
                    <Github color='gray' size='3rem'/>
                </div>
            </div>
        </div>
    )
}