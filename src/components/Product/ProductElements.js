import styled from 'styled-components'

export const ProductContainer  = styled.div`
width:100vw;
padding: 3rem 1rem;
background-color:#f5f5f5;
font-family: 'aldo', sans-serif;
  -webkit-font-smoothing: antialiased;


`;
export const ProductWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto;

`;
export const ProductCard = styled.div`
/* margin: 0 2rem;
line-height:2;
width:300px;
background-color:#2B2B2B;
margin-top:2rem;
margin-bottom:1rem; */
background-color:#575151;
height:18em;
  width:14em;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  position:relative;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius:16px;
  overflow:hidden;
  -webkit-box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #0000000;
  box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;

  
}
`;

export const ProductImg  = styled.img`
display:flex;
align-items:center;
justify-content:center;
height:300px;
min-width:300px;
max-width: 100%;
box-shadow: 8px 8px 5px  #575151;


`;

export const ProductHeading = styled.h1`
font-size: clamp(2rem,2.5vw,3rem);
text-align:center;
margin-bottom:5rem;
`;
export const ProductTitle = styled.h2`
text-transform:uppercase;
font-weight: 700;
font-size: 1.5rem;
color: ##000000
/* font-family: 'aldo', sans-serif; */


`;

export const ProductInfo = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
text-align:center;
color: ##000

`;
export const ProductDesc = styled.p`
margin-bottom:1rem; 
`;

export const ProductPrice = styled.p`
margin-bottom:1rem;
font-size:2rem;
`;

export const ProductButton = styled.button`
font-size:1rem;
padding:1rem 4rem;
border: none;
background: #FF9439;
/* x:#fff; */
transition:0.2s ease-out;

&::hover{
    background:#ffc500;
    transition:0.2s ease-out;
    cursor:pointer;
    color:#ffffff;
}


`;


