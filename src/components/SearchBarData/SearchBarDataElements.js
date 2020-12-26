import styled from "styled-components";
import ImgBg from "../../images/bg_searchbar.png";
import {FaSearch} from 'react-icons/fa'
import FeaturePic2 from "../../images/image_promotion.png";


export const SearchBarContainer = styled.div`
  position: relative; ;
  height:100vh;
  

`;

// export const SearchBarContent = styled.div`
//   height: calc(100vh - 80px);
//   max-height: 100%;
//   width: 100vw;
//   padding: 2rem calc((100vw - 1300px) / 2);
//   position: absolute;
//   right: -15%; ;
// `;

// export const SearchBarItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   height: 100vh;
//   max-height: 100%;
//   padding: 0 2 rem;
//   width: 1000px;
//   color: #fff;
//   text-transform: uppercase;
//   line-height: 1;
//   font-weight: bold;

//   @media screen and (max-width: 650px) {
//     width: 100%;
//   }
// `;
// export const SearchBarH1 = styled.h1`
//   font-size: clamp(2.5rem, 20vw, 6.5rem);
//   margin-bottom: 1rem;
//   font-family: "Ambarella";
//   box-shadow: 2px 5px 7px #e9ba23;
//   letter-spacing: 3.5px;
// `;

// export const SearchBarP = styled.p`
//   font-size: clamp(0.5rem, 10vw, 1.7rem);
//   margin-bottom: 2rem;
//   margin-left: 17%;
//   margin-top: 3%;
//   margin-bottom: 6%;

//   display: flex;
// `;

// export const SearchBarBtn = styled.button`
//   font-size: 1.4rem;
//   padding: 1rem 4rem;
//   border: none;
//   background: #ff9439;
//   color: #fff;
//   border-radius: 0.8rem;
//   transition: 0.2s ease-out;
//   position: relative;
//   font-family: "aldo", sans-serif;
//   left: 100%;
//   display: flex;

//   font-weight: bold;

//   &:hover {
//     background: #ffc500;
//     transition: 0.2s ease-out;
//     cursor: pointer;
//     color: #000;
//   }
// `;


export const SearchBarContainer2 = styled.div`
  :hover {
    -webkit-box-shadow: 10px 10px 5px -5px rgba(221, 219, 219, 1);
    -moz-box-shadow: 10px 10px 5px -5px rgba(221, 219, 219, 1);
    box-shadow: 10px 10px 5px -5px rgba(221, 219, 219, 1);
    /* display: block;
    background-size: cover; */
    width: 100%;

    position: relative;
  }
  input {
  background: rgba(255,255,255,0.4);
  border: none;
  position: relative;
  display: block;
  outline: none;
  width: 800px;
  margin-top:-25%;
  height: 70px;
  padding: 10px;
  color: #333;
  -webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,0.5);
  box-shadow: 0 2px 10px 1px rgba(0,0,0,0.5);
}
::-webkit-input-placeholder { color: #666;} 
:-moz-placeholder { color: #666; }
::-moz-placeholder { color: #666; }
:-ms-input-placeholder { color: #666; }
  
/* 
  form {
  width: 100%;
  color: #000;} */
`;

export const Bars = styled(FaSearch)`
font-size:2rem;
transform:translate(-50%,-15%);
position: absolute;
margin-left:750px;
top: 25px;
;
`
export const ImageSearchResult = styled.img`
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
export const SearchResultContainer2 = styled.div`
  background: #2B2B2B; 
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

