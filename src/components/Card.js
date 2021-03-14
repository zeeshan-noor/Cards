import React from 'react'
import './Card.css'
export default function Card({title,imgUrl,body}) {
    return (
        <div className="card-container">
           <div className="image-container">
            <img src={imgUrl} alt="cell" />
           </div>
            <div className='card-containt'>
            <div className="card-title">
            <h3>{title}</h3>
            </div>
            <div className="card-body">
            <p>{body}</p>
            </div>
            </div>
            <button >View More</button>
        </div>
    )
}
