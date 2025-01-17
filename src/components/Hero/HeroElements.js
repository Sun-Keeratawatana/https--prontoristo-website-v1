import styled from "styled-components";
import ImgBg from '../../images/homeStart.png';


// export const fontFaces = css`
// @font-face {
//   font-family:'Ambarella' ;
//   src: url(${myFontURL})format('wotf2');
// }
// `
// import ImgBg from '../../images/thai_cuisine.png'

export const HeroContainer = styled.div`
  background: 
  /* linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.1)),  */
    url(${ImgBg}) ;
    height:100vh;
    background-position:center;
    background-size:cover;
    position:relative;
    display:flex;
  ;
`;

export const HeroContent = styled.div`
height: calc(100vh - 80px);
max-height:100%;
width: 100vw;
padding:2rem calc((100vw - 1300px)/2);
position: absolute;
right:-15%;

`

export const HeroItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: flex-start;
height:100vh;
max-height:100%;
padding:0 2 rem;
width:1000px;
color: #fff;
text-transform:uppercase;
line-height:1;
font-weight: bold;

@media screen and (max-width: 650px){
  width:100%;
}

`
export const HeroH1 = styled.h1`
font-size:clamp(2.5rem, 20vw, 6.5rem);
margin-bottom:1rem;
font-family: 'Ambarella';
box-shadow:2px 5px 7px #e9ba23;
letter-spacing:3.5px;

`

export const HeroP = styled.p`
font-size:clamp(0.5rem, 10vw, 1.7rem);
margin-bottom:2rem;
margin-left: 17%;
margin-top : 3%;
margin-bottom: 6%;

display:flex;
`

export const HeroBtn = styled.button`
font-size:1.4rem;
padding:1rem 4rem;
border: none;
background: #FF9439;
color: #fff;
border-radius:0.8rem;
transition : 0.2s ease-out;
position:relative;
font-family: 'aldo', sans-serif;
left:115%;
display:flex;

font-weight: bold;


&:hover {
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`
