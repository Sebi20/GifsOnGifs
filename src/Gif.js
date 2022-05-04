import React from 'react';
import {useLocation, Link} from "react-router-dom"
import './Gifs.css'

function Gif(prop){
    const location = useLocation();

    //Gets the first letter of the title and then replacing the first letter with an uppercase first letter
    let firstLetter = location.state.title.substring(0, 1);
    let title = (location.state.title.replace(firstLetter, firstLetter.toUpperCase()));

    //Gets the rating and sets it to uppercase
    let rating = location.state.rating.toUpperCase();
    
    
    return (
        <>

            <Link className="linkToHome" to={"/GifsOnGifs"} underline="none"><h1 className='gifsongifs'>Gifs on Gifs</h1></Link>

            {/* <h4 className='back-btn'>{"<-"}Back</h4> */}

            <div className='content'>
                <img className='gif' src={location.state.img}></img>
                <div className='underGif'>
                    <p className='title'>{title}</p>
                    <p className='rating'>Rated: {rating}</p>
                    <a href='public/images/downloadIcon.png'></a>
                </div>
            </div>
        </>
    )
}

export default Gif;