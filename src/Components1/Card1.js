import React, { useState } from 'react'
import './Card.css';
import Profile from '../profile.json';
export default function Card1() {
    const [name, setname] = useState("Elon Mask")
    const [title, settitle] = useState("Tesla")
    const [about, setabout] = useState("Below is a sample of “Lorem ipsum dolor sit” dummy copy text often used to show font face samples, for page layout and design as sample layout text by printers, graphic designers, Web designers, people creating Microsoft Word templates, and many other uses. It mimics the look of real text quite well as you design and set up your page layouts.")
console.log(Profile);
    return (
        <>
        {/* <div className="card">
            <div className='uper-container'>
                <div className='image-container'>
            <img src='data:image/jpeg;base64,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' alt='Profile' width="100px" height="100px "/>
                </div>
            </div>
            <div className='lower-container'>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{about}</p>
            <button>Visit Profile</button>
            </div>
        </div> */}
                {Object.keys(Profile).map((keyName,index)=>{
                    return(
                        <div className="card">
                   <div className='uper-container' key={index}>
                <div className='image-container'>
              
                <img src={Profile[keyName].profile_pic }height={200} width={300} alt='profile' />
                </div>
                </div>
                <div className='lower-container' key={index}>
            <h3>{Profile[keyName].name}</h3>
            <h3>{Profile[keyName].JOB}</h3>
            <p>{Profile[keyName].Description}</p>
            <button>Visit Profile</button>
            </div>
        </div>
                )
        })}
        
        </>
    )
}


