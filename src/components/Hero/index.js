
import React from "react";
import {Link} from "react-router-dom";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

//check state in sidebar
const Hero = () => {

  function onBookNowButtonPressed(){
    fetch("http://localhost:8000/api/get_hi_restaurant")
    .then((response) => response.json())
    //.then((data) => console.log(JSON.stringify(data['id'])));
    .then((data) => window.location.href("http://localhost:3000/restaurant/"+JSON.stringify(data['id'])));
  }  

  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1> pronto risto</HeroH1>
          <HeroP>SPECIAL MEAL WITH A SPECIAL PERSON</HeroP>
          <Link style={{textDecoration:'none'}}><HeroBtn onClick={onBookNowButtonPressed}> BOOK NOW</HeroBtn></Link>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
