import React from "react";
import { Link } from "react-router-dom";

import homeImage from "../Asset/home.svg";
import homeImage1 from "../Asset/home1.svg";
import homeImage2 from "../Asset/home2.svg";
import homeImage3 from "../Asset/home3.svg";
import homeImage4 from "../Asset/home4.svg";
import homeImage5 from "../Asset/home5.svg";
import homeImage6 from "../Asset/Vector.svg";
import homeImage7 from "../Asset/calander.svg";
import homeImage8 from "../Asset/profile.svg";
// import homeImage9 from "../Asset/Ellipse 1 (1).svg";
import delhiImage from "../Asset/delhi.svg";
import bangluruImage from "../Asset/bangluru.svg";
import chennaiImage from "../Asset/chennai.svg";
import mumbaiImage from "../Asset/mumbai.svg";
import qrcode from "../Asset/adobe-express-qr-code (8) 1.svg";
import ractangle from "../Asset/Rectangle 98.svg";
import "../Components/Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-home container-fluid" id="home-div">
        <img src={homeImage} className="img-fluid" alt="" id="home-image" />
        <p className="text-center" id="home-p1">
          Your Tirp Starts Here
        </p>
        <div className="container-main d-flex">
          <div className="container-menu">
            <Link
              to="/Hotel_home_booking"
              className="nav-link dropdown-item"
              aria-current="page"
            >
              Hotel & Home
            </Link>
          </div>
          <div className="container-menu">
            <Link
              to="/Flight_booking"
              className="nav-link dropdown-item"
              aria-current="page"
            >
              Flight
            </Link>
          </div>
          <div className="container-menu">
            <Link
              to="/Flight_hotel_booking"
              className="nav-link dropdown-item"
              aria-current="page"
            >
              Flight + Hotel
            </Link>
          </div>
          <div className="container-menu">
            <Link
              to="/Trains_booking"
              className="nav-link dropdown-item"
              aria-current="page"
            >
              Trains
            </Link>
          </div>
          <div className="container-menu">
            <Link
              to="/Car_booking"
              className="nav-link dropdown-item"
              aria-current="page"
            >
              Car
            </Link>
          </div>
        </div>
        <div className="container-img">
          <div className="img-card shadow">
            <div>
              <img src={homeImage1} className="img-fluid" alt="" />
            </div>
            <div>5% OFF</div>
          </div>
          <div className="img-card shadow">
            <div>
              <img src={homeImage2} className="img-fluid" alt="" />
            </div>
            <div>4% OFF</div>
          </div>
          <div className="img-card shadow">
            <div>
              <img src={homeImage3} className="img-fluid" alt="" />
            </div>
            <div>3% OFF</div>
          </div>
          <div className="img-card shadow">
            <div>
              <img src={homeImage4} className="img-fluid" alt="" />
            </div>
            <div>2% OFF</div>
          </div>
          <div className="img-card shadow">
            <div>
              <img src={homeImage5} className="img-fluid" alt="" />
            </div>
            <div>4% OFF</div>
          </div>
        </div>
      </div>
      <div className="mid-container d-flex align-items-center px-2">
        <div className="mid-div p-2 py-3">
          <img src={homeImage6} className="px-2" height="32px" alt="" />
          Where are you going?
        </div>
        <div className="mid-div p-2 py-3">
          <img src={homeImage7} className="px-2" height="31px" alt="" />
          Check-in date -Check out date
        </div>
        <div className="mid-div p-2 py-3">
          <img src={homeImage8} className="px-2" height="34px" alt="" />2 adults
          .0 children .1 room
        </div>
        <button type="button" class="btn btn-primary btn-lg fs-2  px-3">
          <i class="fa-solid fa-magnifying-glass fs-4 me-1"></i>
          Search
        </button>
      </div>
      <div className="container-cards">
        <p className="new-user">New user exclusive</p>
        <div className="gy-5 d-flex" id="cards-row">
          <div className="cards-me px-4 py-2 m-0 bg-light shadow">
            <p className="pt-5 fw-bold">2%Off</p>
            <p>Hotel & Home</p>
            <button type="button" class="btn btn-primary px-3 py-0 mx-5">
              Claim All
            </button>
          </div>

          <div className="cards-me px-4 py-2 m-0 bg-light shadow">
            <p className="pt-5 fw-bold">5%Off</p>
            <p>Flight</p>
            <button type="button" class="btn btn-primary px-3 py-0 mx-5">
              Claim All
            </button>
          </div>

          <div className="cards-me px-4 py-2 m-0 bg-light shadow">
            <p className="pt-5 fw-bold">3%Off</p>
            <p>Flight + Hotel</p>
            <button type="button" class="btn btn-primary px-3 py-0 mx-5">
              Claim All
            </button>
          </div>

          <div className="cards-me px-4 py-2 m-0 bg-light shadow">
            <p className="pt-5 fw-bold">4%Off</p>
            <p>Trains</p>
            <button type="button" class="btn btn-primary px-3 py-0 mx-5">
              Claim All
            </button>
          </div>
        </div>
        <p className="new-user my-4">Stay cosy at our handpicked hotels</p>
        <div className="d-flex" id="cards-row">
          <div className="cards-me p-2 bg-light shadow">
            <img src={delhiImage} className="img-fluid" alt="" />
            <p className="fw-bold fs-4 text-center mt-2">New Delhi </p>
            <p className="text-center px-4">
              We price match We aim to offer you the best possible price. If you
              find a cheaper option elsewhere,
            </p>
          </div>

          <div className="cards-me p-2 bg-light shadow">
            <img src={bangluruImage} className="img-fluid" alt="" />
            <p className="fw-bold fs-4 text-center mt-2"> Bengaluru</p>
            <p className="text-center px-4">
              We price match We aim to offer you the best possible price. If you
              find a cheaper option elsewhere,
            </p>
          </div>

          <div className="cards-me p-2 bg-light shadow">
            <img src={chennaiImage} className="img-fluid" alt="" />
            <p className="fw-bold fs-4 text-center mt-2">Chennai </p>
            <p className="text-center px-4">
              We price match We aim to offer you the best possible price. If you
              find a cheaper option elsewhere,
            </p>
          </div>

          <div className="cards-me p-2 bg-light shadow">
            <img src={mumbaiImage} className="img-fluid" alt="" />
            <p className="fw-bold fs-4 text-center mt-2">Mumbai</p>
            <p className="text-center px-4">
              We price match We aim to offer you the best possible price. If you
              find a cheaper option elsewhere,
            </p>
          </div>
        </div>
      </div>
      <div className="get-the-yatra container-fluid d-flex justify-content-between p-0">
        <div className="get-the-yatra-text">
          <p className="fs-2 pt-3">Get the yatra.com app</p>
          <div className="app-only-deals p-0 m-0">
            <div>App-only Deals</div>
            <div> Easy Yatra Planning</div>
          </div>
          <div>
            <div className="d-flex py-3">
              <div>
                <img src={qrcode} alt="" />
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
        <div className=" ps-5 m-0 get-the-yatra-image">
          <img
            src={ractangle}
            className="img-fluid p-0 m-0"
            height="100"
            alt=""
          />
        </div>
      </div>
      <div className="recomandation">
        <p className="fs-4 fw-bold">Yatra.com Recommendations</p>
        <div className="yatra-menu shadow">
          <div className="recomandation-child">
            <ul className="list-recomandation">
              <li> Flight to Singapore </li>
              <li>Flight to Bhutan</li>
              <li> Flight to Nepal</li>
              <li> Flights to Vietnam </li>
              <li>Flight to Canada</li>
            </ul>
          </div>
          <div className="recomandation-child">
            <ul className="list-recomandation">
              <li> Flight to Singapore </li>
              <li>Flight to Bhutan</li>
              <li> Flight to Nepal</li>
              <li> Flights to Vietnam </li>
              <li>Flight to Canada</li>
            </ul>
          </div>
          <div className="recomandation-child">
            <ul className="list-recomandation">
              <li> Flight to Singapore </li>
              <li>Flight to Bhutan</li>
              <li> Flight to Nepal</li>
              <li> Flights to Vietnam </li>
              <li>Flight to Canada</li>
            </ul>
          </div>
          <div className="recomandation-child">
            <ul className="list-recomandation">
              <li> Flight to Singapore </li>
              <li>Flight to Bhutan</li>
              <li> Flight to Nepal</li>
              <li> Flights to Vietnam </li>
              <li>Flight to Canada</li>
            </ul>
          </div>
          <div className="recomandation-child">
            <ul className="list-recomandation">
              <li> Flight to Singapore </li>
              <li>Flight to Bhutan</li>
              <li> Flight to Nepal</li>
              <li> Flights to Vietnam </li>
              <li>Flight to Canada</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
