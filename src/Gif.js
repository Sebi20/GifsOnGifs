import React from 'react';
import {useLocation, Link} from "react-router-dom"
import './Gifs.css'

function Gif(prop){
    const location = useLocation();
    
    
    return (
        <>

            <h1 className='gifsongifs'>Gifs on Gifs</h1>
            <div className='content'>
                <img className='gif' src={location.state.img}></img>
                <div className='underGif'>
                    <p>{location.state.title}</p>
                    <p>Rated: {location.state.rating}</p>
                    <a href='public/images/downloadIcon.png'></a>
                </div>
            </div>
        </>
    )
}

export default Gif;