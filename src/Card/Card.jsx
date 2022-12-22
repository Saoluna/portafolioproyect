
 import './Card.css'
 export const Card = ({emoji, headding, texto, Nubes, detail, Estrella }) =>{
    return(
        <div className="card">
            <img src={emoji} alt="" />
            <span>{headding}</span>
            <span>{texto}</span>
            <span>{Nubes}</span>
            <span>{detail}</span>
            <span>{Estrella}</span>
            <button className="c-button">Leér Mas</button>
        </div>
    )
}