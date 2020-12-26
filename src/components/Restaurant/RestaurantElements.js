import styled from "styled-components";
import Img from '../../images/Image_18.png';

export const RestaurantContainer = styled.div`
background: 
linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.1)
  ), url(${Img});
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
  font-size: clamp(4rem, 5vw, 5rem);
  color: #FFFFFF;
  text-align: center;
}
`;