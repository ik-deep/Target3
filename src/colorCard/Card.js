import React,{ useState } from 'react'
import './Card.css'
const Card = () => {
    const [color, changeColor] = useState("#282c39");
    const [color1, changeColor1] = useState("#282c34");
    const [color2, changeColor2] = useState("#282c34");
    return (
        <div className="main" >
        <div className="first" style={{ background: color }} onClick={() => changeColor("red")}></div>
        <div className="second" style={{ background: color1 }} onClick={() => changeColor1("blue")}></div>
        <div className="third" style={{ background: color2 }} onClick={() => changeColor2("green")}></div>            
        </div>
    )
}

export default Card;
