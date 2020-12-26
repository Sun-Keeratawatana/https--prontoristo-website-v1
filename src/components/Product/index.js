import React from "react";
import {Link} from "react-router-dom";
import {
  ProductContainer,
  ProductHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductElements";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const Products = ({ heading, data }) => {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      {/* <ProductWrapper> */}
      <Carousel breakPoints={breakPoints}>
        {
        data.map((product, index) => (

          <Link style={{textDecoration:'none', color:'white', fontFamily:'Audrey' }} to="/2">
              <ProductCard key={index}>
                <ProductImg img="20%" src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  {/* <ProductDesc>{product.desc}</ProductDesc> */}
                  {/* <ProductPrice>{product.price}</ProductPrice> */}
                  {/* <Link to="/2"><ProductButton>{product.button}</ProductButton></Link> */}
                </ProductInfo>
              </ProductCard>
              </Link> 
            
          
        ))}
        </Carousel>
      {/* </ProductWrapper> */}
    </ProductContainer>
  );
};

export default Products;
