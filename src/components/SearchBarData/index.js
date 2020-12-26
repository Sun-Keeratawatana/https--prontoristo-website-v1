import Form from "antd/lib/form/Form";
import React from "react";
import CardArea from "../../Pages/Search/CardArea"
import ImgBg from "../../images/bg_searchbar.png";

import {
  SearchBarContainer,
  SearchBarContent,
  SearchBarItems,
  SearchBarH1,
  SearchBarP,
  SearchBarBtn,
  SearchBarContainer2,
  Bars,
  SearchResultContainer2,
  ImageSearchResult ,
} from "./SearchBarDataElements";

class SearchBarTest extends React.Component {
  render() {
    return (
    <div>
      {/* <SearchBarContainer> */}
      <img style={{width:'100%'}} src = {ImgBg}></img>
         <div className="ui container">  
         
        <Form>
            <SearchBarContainer2>
                <form className="ui form">
                    <div className="field">
                        <span><input 
                            type="text"
                            placeholder="Search Restaurant"
                        />
                        <Bars/></span>
                    </div>
                </form>
            </SearchBarContainer2>
        </Form>
        </div>
        <h2 style={{marginTop:'7%'}}><center>Results</center></h2>
        {/* <SearchResultContainer2>
        <ImageSearchResult/>
            <p>
             <h1>Restaurant</h1>
             <br/>
             <div>CUISINE </div>
            <div>LOCATION</div>
            <div>Price</div>
             </p>

        </SearchResultContainer2> */}
      {/* </SearchBarContainer> */}
      <CardArea/>
      
      </div>
      
    );
  }
}
export default SearchBarTest;
