import {useState} from 'react';
import '../CSS/Heart.css'
import clicked from '../images/clicked.png'
import unclicked from '../images/unclicked.png'

function Heart(){
    const[heart, setHeart] = useState(unclicked);

    function changeHeart(){
        if(heart == clicked){
            setHeart(unclicked);
        }else{
            setHeart(clicked);
        }
    } 

    return(
        <>
        <img src={heart} alt='Heart' onClick={changeHeart} className='heart'></img>
        </>
    )
}

export default Heart;