import React from "react";
import { Link } from "react-router-dom";
import "../Components/Hotel_home_booking.css";
import qrcodeImage from "../Asset/adobe-express-qr-code (8) 1.svg";
import bookingImage from "../Asset/booking.png"
import Logo1Image from "../Asset/logo1.png";
import Logo2Image from "../Asset/logo2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Car_booking() {
  return (
    <>
    <Navbar />
    <div className="Hotel-home-booking-container">
       <form action="">
        <a href="/">
       <button type="button" class="back-btn-Hotel_home_booking btn btn-dark btn-sm"> <i class="fa-solid fa-arrow-left"></i>Back</button>
       </a>
       </form>
        <p className="your-Trip-text fw-bold">Your Trip Starts Here</p>
      </div>
      <div className="slide-Hotel-home-booking">
              <div className="text-Hotel-home-booking" id="Hotel-home-booking-component">
                <Link to="/Hotel_home_booking" className="nav-link dropdown-item p-0" aria-current="page">Hotel & Home</Link></div>
              <div className="text-Hotel-home-booking"> 
                   <Link to="/Flight_booking" className="nav-link dropdown-item p-0" aria-current="page">Flight</Link></div> 
              <div className="text-Hotel-home-booking">
                   <Link to="/Flight_hotel_booking" className="nav-link dropdown-item p-0" aria-current="page">Flight + Hotel</Link></div>
              <div className="text-Hotel-home-booking">
                   <Link to="/Trains_booking" className="nav-link dropdown-item p-0" aria-current="page">Trains</Link></div>
              <div className="text-Hotel-home-booking"> 
                   <Link to="/Car_booking" className="nav-link dropdown-item p-0" aria-current="page">Car</Link></div>
            </div>
       <div className="container-form">
        <p className="fs-3 text-center">SEARCH FOR CAR</p>
        <form action="">
         <label htmlFor="" className="label-booking">Name-</label>
          <input type="text" className="name-booking mt-4" placeholder="    Your Name" />
          <label htmlFor="" className="label-booking">E.mail-</label>
          <input type="email" className="name-booking mt-4" placeholder="    rajangiri@gmail.com" />
          <label htmlFor="" className="label-booking ms-2">From-</label>
          <input type="text" className="From-booking mt-4" placeholder="    Address" />
          <label htmlFor="" className="label-booking ms-5">To</label>
          <input type="text" className="From-booking mt-4 ms-5" placeholder="    Address" />
          <label htmlFor="" className="label-booking">Adults -</label>
          <input type="text" className="From-booking mt-4" placeholder="    Address" />
          <label htmlFor="" className="label-booking ms-3">children </label>
          <input type="text" className="From-booking mt-4 ms-3" placeholder="    Address" />
          <label htmlFor="" className="label-booking">Travel 
Class-</label>
          <input type="text" className="trevel-booking mt-4" placeholder="    Economy class" />

           <label htmlFor="" className="label-booking">Departure
On  -</label>
          <input type="date" className="date-booking mt-4" placeholder="    Address" />
          <label htmlFor="" className="label-booking ms-1">Journey
   type </label>
          <input type="text" className="date-booking mt-4" placeholder="    Address" />
<a href="Car_booking">
       <button type="button" class="book-btn-Hotel_home_booking fs-4 btn btn-sm">Book Now</button>
          </a>
        </form>
       </div>

       <div className="book-image-container d-flex">
          <div className="book-image">
            <img src={bookingImage} alt="" />
          </div>
          
            <div className="get-the-yatra-text ">
            <p className="fs-2 pt-3 fw-bold">Get the yatra.com app</p>
            <div className="app-only-deals p-0 m-0">
              <div>App-only Deals</div>
              <div> Easy Yatra Planning</div>
            </div>
            <div>
            <div className="d-flex py-3">
              <div>
                <img src={qrcodeImage} alt="" />
              </div>
              <div className="px-3">
                <div className="fs-5 fw-bold">1.8M+</div>
                <div className="qrcode-text">Daily users</div>
              </div>
              <div className="vertical-line"></div>
              <div className="px-2">
                <div className="fs-5 fw-bold">150K+</div>
                <div className="qrcode-text">downloads</div>
              </div>
              <div className="vertical-line"></div>
              <div className="px-2">
                <div className="fs-5 fw-bold">4.7</div>
                <div className="qrcode-text"> Rating</div>
              </div>
            </div>
            </div>
          
          </div>
        </div>

        <div className="logos d-flex my-5">
        <p className="fs-4 me-3">Payment Mode:- </p>
        <div><img src={Logo1Image} alt="" /></div>
        <div><img src={Logo2Image} alt="" /></div>

      </div>
    
    
    
    <Footer />
    </>
  )
}

export default Car_booking;

