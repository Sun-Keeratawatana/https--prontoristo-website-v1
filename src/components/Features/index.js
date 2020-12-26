import React from "react";
import {FeatureContainer,FeatureButton} from './FeatureElements'

/*
function onBookNowButtonPressed(){
  const requestOptions = {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
    }),
  };
  fetch("http://localhost:8000/api/get_hi_restaurant", requestOptions)
  .then((response) => response.json())
  .then((data) => console.log(data))
}
*/

function onBookNowButtonPressed(){
  fetch("http://localhost:8000/api/get_hi_restaurant")
  .then((response) => response.json())
  //.then((data) => console.log(JSON.stringify(data['id'])));
  .then((data) => window.location.href("http://localhost:3000/restaurant/"+JSON.stringify(data['id'])));
}

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Deal of the Day</h1>
      <p>get a special price only this day!</p>
      <FeatureButton onClick={onBookNowButtonPressed}> Book Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;