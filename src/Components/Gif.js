import {UseState} from 'react'
import '../CSS/GifDisplay.css'


function Gif(prop){


    return(
        <>
        <img src={prop.img}></img>
        </>
    )
}

export default Gif;