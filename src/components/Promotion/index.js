import React from "react";
import {Link} from "react-router-dom";
import {FeatureContainer2,FeatureButton, ImagePromotion} from './PromotionElements';

const Promotion = () => {

  function onBookNowButtonPressed(){
    fetch("http://localhost:8000/api/get_hi_restaurant")
    .then((response) => response.json())
    //.then((data) => console.log(JSON.stringify(data['id'])));
    .then((data) => window.location.href("http://localhost:3000/restaurant/"+JSON.stringify(data['id'])));
  }  

  return (
    <FeatureContainer2>
      <ImagePromotion />
      <p>
      <h1>PROMOTION OF THE MONTH</h1>
      <br/>
      <div>GET UP TO 50 % DISCOUNT FOR BOOKING WITH US WITHIN
        <br/> OCTOBER 2020
      </div>
      <div style={{color:"#E65C5C",marginLeft:'5%'}} ><center>(Only at jointed - promotional restaurant)</center></div>
      <Link><FeatureButton onClick={onBookNowButtonPressed}> Book Now</FeatureButton></Link>
      </p>
    </FeatureContainer2>
  );
};

export default Promotion;