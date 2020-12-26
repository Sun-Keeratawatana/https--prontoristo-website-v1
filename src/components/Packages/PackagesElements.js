import styled from "styled-components";

export const PackagesContainer = styled.div`

border: 2px solid black;
border-radius: 3px;
width:40vw;
height: 100vh;
max-height: 200px;
margin: 0 8rem;
margin-bottom:1rem;
margin-top:2rem;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
align-items: left;
color: #ffffff;
text-align: left;
padding: 0 1rem;

  h1 {
    margin-top: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    color: #000000;
  }
  p {
    margin-top: 1rem;
    font-size: clamp(1rem, 1.5vw, 1rem);
    color: #000000;
  }
`;
export const PackagesButton = styled.button`
  font-size: 1.3rem;
  padding: 0.5rem 2.5rem;
  float:center;
  border: 2px solid black;
  border-radius: 3px;
  color: #000;
  transition: 0.2s ease-out;
  margin-top: 1rem;
  
`;
