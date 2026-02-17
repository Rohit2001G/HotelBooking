import React from "react";
import "../Components/Flight_Hotel.css";
import delhi1Image from "../Asset/delhi1.png";
import bangluru1Image from "../Asset/bangluru1.png";
import chennai1Image from "../Asset/chennai1.png";
import mumbai1Image from "../Asset/mumbai1.png";
import Logo1Image from "../Asset/logo1.png";
import Logo2Image from "../Asset/logo2.png";
import qrcodeImage from "../Asset/adobe-express-qr-code (8) 1.svg";
import FlighthotelImage from "../Asset/flight-hotel.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Flight_Hotel() {
  return (
    <>
    <Navbar />
      <div className="Flight-hotel-container">
        <p className="your-Trip fw-bold">Your Trip Starts Here</p>
        <p className="Flight-Hotel-text fw-bold">Flight + Hotel</p>
      </div>

      <div className="slide-flight-hotel">
        <form action="" className="Form">
          <input type="text" className="input-departure" placeholder="From" />
          <input type="text" className="input-departure" placeholder="To" />
          <input
            type="text"
            className="input-depart"
            placeholder="Depart                    ----------                 Return"
          />
          <br />
          <input
            type="text"
            className="input-Destination"
            placeholder="Destination"
          />
          <input
            type="text"
            className="input-depart"
            placeholder="Check-In                    5 Night               Check-Out"
          />
          <br />
          <button type="button" class="search-btn btn btn-primary btn-sm">
            Search
          </button>
        </form>
      </div>
      <div className="content-container">
        <div className="content-flight-hotel">
          <p className="main-title">Exclusive Offer</p>
          <br />
          <p>Unlock big savings by booking your flights and hotels together</p>
        </div>
        <div className="content-flight-hotel">
          <p className="main-title">Exclusive Offer</p>
          <br />
          <p>Unlock big savings by booking your flights and hotels together</p>
        </div>
        <div className="content-flight-hotel">
          <p className="main-title">Exclusive Offer</p>
          <br />
          <p>Unlock big savings by booking your flights and hotels together</p>
        </div>
      </div>
      <div className="main-flights">
        <p className="fs-4 fw-bold ps-4 pt-3">Popular Destinations</p>
        <div className="row">
          <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <img src={delhi1Image} width="248" alt="" />
              <p className="pt-4 fw-bold ps-4">
                Nagpur   <span>New Delhi</span>{" "}
              </p>
              <p className="text-center px-4 pt-3">
                Become a member to get exclusive discounts and earn Trip Coins
                which can be used just like cash
              </p>
            </div>
          </div>
           <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <img src={mumbai1Image} width="248" alt="" />
              <p className="pt-4 fw-bold ps-4">
                Nagpur   <span>Mumbai</span>{" "}
              </p>
              <p className="text-center px-4 pt-3">
                Become a member to get exclusive discounts and earn Trip Coins
                which can be used just like cash
              </p>
            </div>
          </div>
           <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <img src={bangluru1Image} width="248" alt="" />
              <p className="pt-4 fw-bold ps-4">
                Nagpur   <span>Bangluru</span>{" "}
              </p>
              <p className="text-center px-4 pt-3">
                Become a member to get exclusive discounts and earn Trip Coins
                which can be used just like cash
              </p>
            </div>
          </div>
           <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <img src={chennai1Image} width="248" alt="" />
              <p className="pt-4 fw-bold ps-4">
                Nagpur   <span>Chennai</span>{" "}
              </p>
              <p className="text-center px-4 pt-3">
                Become a member to get exclusive discounts and earn Trip Coins
                which can be used just like cash
              </p>
            </div>
          </div>
           </div>
      </div>
      <div className="logos d-flex">
        <p className="fs-4 me-3">Payment Mode:- </p>
        <div><img src={Logo1Image} alt="" /></div>
        <div><img src={Logo2Image} alt="" /></div>

      </div>
      <div className="flight-hotel-image-container d-flex">
          
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
          <div className="flight-hotel-image">
            <img src={FlighthotelImage} alt="" />
          </div>
        </div>
      <Footer />
    </>
  );
}
export default Flight_Hotel;
