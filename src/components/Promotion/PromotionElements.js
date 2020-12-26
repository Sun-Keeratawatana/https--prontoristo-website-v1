import styled from "styled-components";
import FeaturePic from "../../images/thai_cuisine.png";
import FeaturePic2 from "../../images/image_promotion.png";

export const FeatureContainer = styled.div`
  background: 
  linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.1)
    ), url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  margin-bottom:3rem;


  h1 {
    font-size: clamp(2rem, 5vw, 5rem);
  }
  div {
      margin-top:0.5rem;
    font-size: clamp(1rem, 3vw, 2rem);  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureContainer2 = styled.div`
  background: #2B2B2B; 
  
  /* linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.1)
    ), url(${FeaturePic}); */

  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  margin-bottom:3rem;
  float:left

  h1 {
    margin:2rem;
    float:left;
    flex-direction:column;
    font-size: clamp(2rem, 5vw, 5rem);
  }
  div {
    float:left;
    margin-top:0.5rem;
    font-size: clamp(1rem, 3vw, 2rem);  }
  p {
    float:left;
    padding:2rem;
  }
`;
export const FeatureButton = styled.button`
  font-size: 1rem;
  margin-top:5rem;
  margin-bottom:5rem;
  padding: 0.6rem 3rem;
  border-radius: 0.5rem;
  border-color:#E65C5C;
  background: transparent;
  color: #E65C5C;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
export const ImagePromotion = styled.img`
 background: url(${FeaturePic2});
 height: 100vh;
  max-height: 500px;
  float:left;
  width:150%;
  object-fit:fill;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
`
