import React, { useState } from "react";
import Select from 'react-select'
import {BookingContainer, BookingButton} from './BookingElements';
import DatePicker from 'react-date-picker';
import {guestoptions, childrenoptions, timeoptions} from './BookingSelect'
import {Link} from "react-router-dom";

const Booking = () => {
    const [value, onChange] = useState(new Date());

    function onBookNowButtonPressed(){
        console.log(window.location.href)
        window.location.href("http://localhost:3000/restaurant/reserve/"+
        window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1));
      }  
      
    return (
        <BookingContainer>
            <h1>Booking Detail</h1>
            <p>Adult: </p>
            <Select name = "NoOfGuest" options={guestoptions} clearable={false}  />
            <p>Child: </p>
            <Select name = "NoOfChildren" options={childrenoptions}clearable={false} />
            <p>Date: </p>
            <DatePicker
                onChange={onChange}
                value={value}/>
            <p>Time</p>
            <Select name = "TimeSelect" options={timeoptions}clearable={false}/>
            <Link><BookingButton onClick={onBookNowButtonPressed}>Continue</BookingButton></Link>
        </BookingContainer>
  );
};


export default Booking;

 
