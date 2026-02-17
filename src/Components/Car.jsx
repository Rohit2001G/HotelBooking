import React from "react";
import "../Components/Car.css";
import delhiImage from "../Asset/delhi.svg";
import bangluruImage from "../Asset/bangluru.svg";
import chennaiImage from "../Asset/chennai.svg";
import mumbaiImage from "../Asset/mumbai.svg";
import ProfileImage from "../Asset/profile.png";
import qrcodeImage from "../Asset/adobe-express-qr-code (8) 1.svg"
import carImage from "../Asset/car.png"
import car1 from "../Asset/car1.jpg"
import car2 from "../Asset/car2.jpg"
import car3 from "../Asset/car3.jpg"
import car4 from "../Asset/car4.jpg"
import Navbar from "./Navbar";
import Footer from "./Footer";

function Car() {
  return (
    <>
    <Navbar />
      <div className="car-container">
        <p className="your-Trip fw-bold">Your Trip Starts Here</p>
        <p className="Flight-Hotel-text fw-bold">Car</p>
      </div>
      <div className="slide-car">
        <form action="" className="Form-car">
          <input type="text" className="input-from-car" placeholder="     From" />
          <input type="text" className="input-from-car" placeholder="       To" />
          <input type="text" className="input-pickup" placeholder="       Pick-up Date -     00:00    " />
          <input type="text" className="input-pickup" placeholder="      Drop-off Date -      00:00 " />
          <button type="button" class="search-btn-car btn btn-primary btn-sm">
            Search
          </button>
        </form>
      </div>
      <div className="container-cards-car ">
        <div className="row gy-4" id="cards-row1">
          <div className=" col-3">
            <div className="cards-me-car1 p-2 bg-light shadow">
              <img src={delhiImage} className="img-fluid" alt="" />
              <p className="fw-bold fs-4 text-center mt-2">New Delhi </p>
            </div>
          </div>

          <div className="col-3">
            <div className="cards-me-car1 p-2 bg-light shadow">
              <img src={bangluruImage} className="img-fluid" alt="" />
              <p className="fw-bold fs-4 text-center mt-2"> Bengaluru</p>
            </div>
          </div>
          <div className="col-3">
            <div className="cards-me-car1 p-2 bg-light shadow">
              <img src={chennaiImage} className="img-fluid" alt="" />
              <p className="fw-bold fs-4 text-center mt-2">Chennai </p>
            </div>
          </div>
          <div className="col-3">
            <div className="cards-me-car1 p-2 bg-light shadow">
              <img src={mumbaiImage} className="img-fluid" alt="" />
              <p className="fw-bold fs-4 text-center mt-2">Mumbai</p>
            </div>
          </div>
          <p className="Popular-car">Popular Car rental type</p>
          <div className="row gy-5" id="cards-row-car">
            <div className="car-cards col-3 shadow">
              <img src={car1} width="257" height="189" alt="" />
            </div>
            <div className="car-cards col-3 shadow">
              <img src={car2} width="257" height="189" alt="" />
            </div>
            <div className="car-cards col-3 shadow">
              <img src={car3} width="257" height="189" alt="" />
            </div>
            <div className="car-cards col-3 shadow">
              <img src={car4} width="257" height="189" alt="" />
            </div>
          </div>

          <p className="Car-rental">Car rental user reviews</p>
          <div className="row gy-5" id="rental-row-car">
            <div className="rental-cards col-3 shadow">
              <div className="profile-Image d-flex">
                <img src={ProfileImage} alt="" />
                <p className="m-2 fw-bold"> Rajan Kumar</p>
              </div>
              <p className="text-center ms-2">
                  Become a member to get exclusive discounts and earn Trip Coins
                  which can be used just like cash
                </p>
            </div>
            <div className="rental-cards col-3 shadow">
              <div className="profile-Image d-flex">
                <img src={ProfileImage} alt="" />
                <p className="m-2 fw-bold"> Rohit Kumar</p>
              </div>
              <p className="text-center ms-2">
                  Become a member to get exclusive discounts and earn Trip Coins
                  which can be used just like cash
                </p>
            </div>
            <div className="rental-cards col-3 shadow">
              <div className="profile-Image d-flex">
                <img src={ProfileImage} alt="" />
                <p className="m-2 fw-bold"> Aakash Kumar</p>
              </div>
              <p className="text-center ms-2">
                  Become a member to get exclusive discounts and earn Trip Coins
                  which can be used just like cash
                </p>
            </div>
            <div className="rental-cards col-3 shadow">
              <div className="profile-Image d-flex">
                <img src={ProfileImage} alt="" />
                <p className="m-2 fw-bold"> Rahul Kumar</p>
              </div>
              <p className="text-center ms-2">
                  Become a member to get exclusive discounts and earn Trip Coins
                  which can be used just like cash
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className="car-image-container d-flex">
          
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
          <div className="car-image">
            <img src={carImage} alt="" />
          </div>
        </div>
        <Footer />
    </>
  );
}

export default Car;
