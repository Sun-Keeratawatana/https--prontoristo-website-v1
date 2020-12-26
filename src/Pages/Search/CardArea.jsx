import "./Search.css";
import React from 'react';
import SearchCard from './SearchCard';
import {productDataTwo} from './data';

function CardArea(){

    const firstItem = productDataTwo.slice(0,1);
    const severalItem = productDataTwo.slice(1);

    console.log(firstItem)

    return <div>
        <div className='row'>
            {firstItem.map((res) => {
                return <SearchCard
                img={res.img}
                title={res.name}
                cuisine={res.cuisine}
                location={res.location}
                price={res.price}
                />
            })}
        </div>
        {severalItem.map((res) =>{
        return <div className='row'>
              <SearchCard
                img={res.img}
                title={res.name}
                cuisine={res.cuisine}
                location={res.location}
                price={res.price}
                />

    </div>
        })}
    
    </div>
}

export default CardArea;