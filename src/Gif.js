import React from 'react';
import {useLocation, Link} from "react-router-dom"
import {useState} from 'react'
import './Gifs.css'
import downloadIcon from './images/downloadIcon.png'


function Gif(prop){
    const location = useLocation();
    localStorage.setItem("gif", location.state.img);

    const[gif, setGif] = useState(localStorage.getItem("gif"));



    //Gets the first letter of the title and then replacing the first letter with an uppercase first letter
    let firstLetter = location.state.title.substring(0, 1);
    let title = (location.state.title.replace(firstLetter, firstLetter.toUpperCase()));

    //Gets the rating and sets it to uppercase
    let rating = location.state.rating.toUpperCase();

    const downloadSelected = async () => {
        let temp = document.createElement("a")
    
        document.body.appendChild(temp)

        let image = await fetch(location.state.img)
        let blob = await image.blob()
        let imageURL = URL.createObjectURL(blob)
        temp.setAttribute("href",imageURL)
        console.log(imageURL)
        temp.setAttribute("download",`${title}`)
        temp.click()
        temp.remove()
      }




    return (
        <>

            <Link className="linkToHome" to={"/GifsOnGifs"} underline="none"><h1 className='gifsongifs'>Gifs on Gifs</h1></Link>

            <div className='content'>
                <img className='gif' src={gif} alt=""></img>
                <div className='underGif'>
                    <p className='title'>{title}</p>
                    <p className='rating'>Rated: {rating}</p>
                    <img className='download' onClick={downloadSelected} src={downloadIcon} ></img>
                </div>
            </div>
        </>
    )
}

export default Gif;