import React, { useState, useEffect } from 'react'
import './ImgCard.css';

const ImgCard = () => {
         const [data, setData] = useState([]);

         useEffect(() => {
            import('../Imgdata.json').then(response => setData(response.default.data)
            );
         }, []);

    return (
      <div>
        <div className="tour">
           {data.map((val) => {
            return (
                <div className="img-container" key={val.id}>
                    <img className="imgHover" src={val.img} alt=""/>
                   <h3>{val.title}</h3>
                   <p>{val.discription}</p>

                </div>          
           
            )
        })}
        </div>
    
      </div>
       
    );
}

export default ImgCard;
