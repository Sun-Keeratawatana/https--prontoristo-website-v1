import React from "react";
import Feature from "../../components/Features";
import Hero from "../../components/Hero";
import Products from "../../components/Product";
import Promotion from "../../components/Promotion";
import { GlobalStyle } from "../../globalStyles";
import { productData, productDataTwo } from "../../components/Product/data";
import ScrollToTop from "../ScrollToTop";
import ProductsRecommend from "../../components/RecommendProduct";

function Home() {
  return (
    <ScrollToTop>
    <div>
      <GlobalStyle />
      <Hero />
      <Products heading="CUISINES" data={productData} />
      <Feature />
      <ProductsRecommend heading="RECOMMENDATIONS FOR YOU" data={productDataTwo} />
      <Promotion />
    </div>
   </ScrollToTop>
  );
}

export default Home;
