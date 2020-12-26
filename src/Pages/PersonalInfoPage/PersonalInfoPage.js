import React from "react";
import { GlobalStyle } from "../../globalStyles";
import InfoTop from "../../components/InfoTop";
import GuestInfo from "../../components/GuestInfo";
import Packages from "../../components/Packages";
import Booking from "../../components/Booking";
import ScrollToTop from "../ScrollToTop";
import { useState } from 'react';
import {useEffect } from "react";

function PersonalInfoPage() {

  const[Restaurant_ID, setID] = useState(0);
  const[Restaurant_Name, setName] = useState('');
  const[Restaurant_Description, setDescription] = useState('');
  const[Restaurant_Hours, setHours] = useState('');
  const[Restaurant_Menu, setMenu] = useState('');
  const[Restaurant_Notice, setNotice] = useState('');
  const[Restaurant_Package, setPackage] = useState('');

  useEffect(() => {
    fetch("http://localhost:8000/api/get_restaurant"+"?id="
    + window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1))
    .then((response) => response.json())
    .then((data) =>{
      setID(data.id)
      setName(data.name)
      setDescription(data.descriptor)
      setHours(data.op_hours)
      setMenu(data.menu_list)
      setNotice(data.notices)
      setPackage(data.packages)
      console.log("Done")
    })
  },[])

  return (
    <ScrollToTop>
    <div>
        <GlobalStyle />
        <InfoTop />
        <GuestInfo />
        <Booking />
        <Packages>{Restaurant_Package}</Packages>
    </div>
    </ScrollToTop>
    );
}

export default PersonalInfoPage;
