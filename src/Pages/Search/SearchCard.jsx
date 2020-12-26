import "./Search.css";
import React from 'react';
import FeaturePic2 from "../../images/image_promotion.png";

function SearchCard(props){
    return <div className='card-search-container'>
        <h2>{props.price}</h2> 

        <div className='left-side'>
        <img src={props.img} className=''></img>
        </div>

        <div className='right-side'>
        <h1>{props.title}</h1>
        <p>{props.cuisine}</p>
        <p>{props.location}</p>
        </div>
        
    </div>
}

export default SearchCard;