import React from "react";
import {PackagesContainer,PackagesButton} from './PackagesElements'

const Packages = (props) => {
  return (
    <PackagesContainer>
      <h1>Packages</h1>
      <PackagesButton>{props.children.split(',')[0]}</PackagesButton>
      <PackagesButton>{props.children.split(',')[1]}</PackagesButton>
    </PackagesContainer>
  );
};

export default Packages;