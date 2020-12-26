import styled from "styled-components";

export const BookingContainer = styled.div`
  float:right;
  border: 2px solid black;
  border-radius: 3px;
  width:30vw;
  height: 300vh;
  max-height: 500px;
  margin: 5rem;
  margin-bottom:1rem;
  margin-top:4rem;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  text-align: center;
  

  h1 {
    margin-top: 1rem;
    margin: 1rem;
    font-size: clamp(2rem, 2vw, 1rem);
    color: #000000;
  }
  p {
    margin-top: 0.5rem;
    font-size: clamp(1.5rem, 1.5vw, 1rem);
    color: #000000;
  }
`;

export const BookingButton = styled.button`
font-size:1.4rem;
padding:1rem 4rem;
margin-top:1.5rem;
border: none;
background: #FF9439;
color: #fff;
border-radius:0.8rem;
transition : 0.2s ease-out;
position:relative;
font-family: 'aldo', sans-serif;
display:flex;

font-weight: bold;


&:hover {
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`;
