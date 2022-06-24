import react from 'react'
import {useState} from 'react';
import '../CSS/Favorite.css';
import {Link} from "react-router-dom"

function Favorite(){


    return(
        <>
            <h1 className='heading'>All your Fav's on one page</h1>

            <Link className='backToMain' to={"/"}><h5>Back to main←</h5></Link>
        </>
    );
}

export default Favorite;