import React from "react";
import {DescriptionContainer} from './DescriptionElements'
import { useState } from 'react';

const Description = (props) => {

  return (
    <DescriptionContainer>
      <h1>{props.children[0]}</h1>
      <p>{props.children[1]}</p>
      <h1>Opening Hours:</h1>
      <p>{props.children[2]}</p>
      <h1>Cuisine:</h1>
      <p>{props.children[3]}</p>
      <h1>Additional:</h1>
      <p>{props.children[4]}</p>
    </DescriptionContainer>
  );
};

export default Description;