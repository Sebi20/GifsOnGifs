import {UseState} from 'react'
import '../CSS/Gif.css'
import Heart from './Heart';
import {Link, useLocation, useNavigate} from 'react-router-dom';


function Gif(prop){
    
    return(
        <>
            <Link to= {'/gifdisplay'} state={{
                img: prop.img,
                title: prop.title,
                rating: prop.rating
            }}>
                <img className='gifs' src={prop.img}></img> 
        
            </Link>

            <div className='heartContainer'><Heart/></div>
        </>
    )
}

export default Gif;