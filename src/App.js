import React ,{useState}from "react";

//import Router
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import SearchBarPage from './components/SearchBar/index';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PersonalInfoPage from "./Pages/PersonalInfoPage/PersonalInfoPage"
import BookingPage from "./Pages/BookingPage/BookingPage"
import SearchBar from "./components/SearchBarData";
import SearchBarTest from "./components/SearchBarData";
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Router>
      <Navbar toggle = {toggle}/>
      <Sidebar isOpen ={isOpen} toggle = {toggle}/>
      <switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/result" exact component={SearchBarPage}/>
        <Route path="/2" exact component={BookingPage}/>
        <Route path="/restaurant/reserve/:restaurant_id" exact component={PersonalInfoPage}/>
        <Route path = "/test" exact component = {SearchBarTest}/>
        <Route path="/restaurant/:restaurant_id" component={BookingPage}/>
        
      </switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
