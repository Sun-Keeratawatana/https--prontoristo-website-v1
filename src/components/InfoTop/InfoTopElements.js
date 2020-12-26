import styled from "styled-components";
import Img from '../../images/bg_pe@2x.png';

export const InfoTopContainer = styled.div`
background: 
linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
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
`;