import React from "react";
import "../Components/Trains.css";
import delhi1Image from "../Asset/delhi1.png";
import bangluru1Image from "../Asset/bangluru1.png";
import chennai1Image from "../Asset/chennai1.png";
import mumbai1Image from "../Asset/mumbai1.png";
import trainImage from "../Asset/train1.svg";
import qrcodeImage from "../Asset/adobe-express-qr-code (8) 1.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Trains(){
return(
<>
<Navbar />
<div className="Train-container">
        <p className="your-Trip fw-bold">Your Trip Starts Here</p>
        <p className="Flight-Hotel-text fw-bold">Trains</p>
      </div>
       <div className="slide-Train">
        <form action="" className="Form-Train">
          <input type="text" className="input-from" placeholder="    From" />
          <input type="text" className="input-from" placeholder="       To" />
          <input type="text" className="input-return" placeholder="   Departure Time                                              Return Time" />
          <button type="button" class="search-btn-train btn btn-primary btn-sm">
            Search
          </button>
        </form>
      </div>

      <div className="container-cards-train">
        <p className="new-user">New user exclusive</p>
        <div className="row gy-5" id="cards-row">
          <div className="col-3">
            <div className="cards-me px-4 py-2 m-0 bg-light shadow">
              <p className="pt-5 fw-bold fs-4">2%Off</p>
              <p>Hotel & Home</p>
              <button type="button" class="btn btn-primary px-3 py-0 mx-5">
                Claim All
              </button>
            </div>
          </div>

          <div className="col-3">
            <div className="cards-me px-4 py-2 m-0 bg-light shadow">
              <p className="pt-5 fw-bold fs-4">5%Off</p>
              <p>Flight</p>
              <button type="button" class="btn btn-primary px-3 py-0 mx-5">
                Claim All
              </button>
            </div>
          </div>
          <div className="col-3">
            <div className="cards-me px-4 py-2 m-0 bg-light shadow">
              <p className="pt-5 fw-bold fs-4">3%Off</p>
              <p>Flight + Hotel</p>
              <button type="button" class="btn btn-primary px-3 py-0 mx-5">
                Claim All
              </button>
            </div>
          </div>
          <div className="col-3">
            <div className="cards-me px-4 py-2 m-0 bg-light shadow">
              <p className="pt-5 fw-bold fs-4">4%Off</p>
              <p>Trains</p>
              <button type="button" class="btn btn-primary px-3 py-0 mx-5">
                Claim All
              </button>
            </div>
          </div>
        </div>
      </div>

       <div className="main-Train">
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
      <div className="recomandation-train">
        <p className="fs-4 fw-bold">Yatra.com Recommendations</p>
        <div className="border border-secondary d-flex lh-lg pt-3 pb-5 my-4">
          <div className="ps-3">
           <ul className="list-recomandation"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
          <div className="ps-5">
           <ul className="list-recomandation"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
          <div className="ps-5">
           <ul className="list-recomandation"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
          <div className="ps-5">
           <ul className="list-recomandation"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
          <div className="ps-5">
           <ul className="list-recomandation"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
        </div>
      </div>
      <div className="train-image-container d-flex">
          <div className="train-image">
            <img src={trainImage} alt="" />
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
  <Footer />
</>
)
}

export default Trains;