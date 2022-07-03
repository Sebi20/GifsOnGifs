import {UseState} from 'react'
import '../CSS/Gif.css'
import Heart from './Heart';


function Gif(prop){


    return(
        <>
            <img className='gifs' src={prop.img}></img> 
            <div className='heartContainer'><Heart/></div>
        </>
    )
}

export default Gif;