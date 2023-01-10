import './FloatingDiv.css'

export const FloatingDiv = ({image,txt1,txt2, Sol, purpleblur }) =>{
    return (
        <div className="floatingdiv">
            <img src={image} alt="" />
            <span>
                {txt1}
                <br/>
                {txt2}
            </span>
                <span>
                    {Sol}
                </span>
                <span>
                    {purpleblur}
                </span>
             </div>
    )
}