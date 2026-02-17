import React from "react";
// import FlightImage from "../Asset/flight.svg";
import FlightImage from "../Asset/flight.svg";
import girldImage from "../Asset/girl.svg";
import mapImage from "../Asset/map.svg";
import FlightImage2 from "../Asset/flight2.svg";
import qrcode from "../Asset/adobe-express-qr-code (8) 1.svg";
import "../Components/Flight.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Flight() {
  return (
    <>
    <Navbar />
      <div className="slide container-fluid my-1 p-0">
        <img src={FlightImage} width="1520" alt="Flight" />
      </div>
      <p className="your-flight fw-bold">Your Flight Trip Starts Here</p>

      <div className="slide-contaier shadow">
        <div className="d-flex ps-5">
          <p className="px-2 pt-4">Return </p>
          <p className="px-2 pt-4"> One-wey</p>
          <p className="px-2 pt-4"> Multi-City</p>
          <form action="" className="pt-4">
            <input className="ms-5" type="checkbox" name="" id="" /> Direct
            <br></br>
            <div className="inputs-flights-container d-flex">
              <input
                className="inputs-flights"
                type="text"
                name=""
                placeholder="    Leaving From "
                id=""
              />
              <input
                className="inputs-flights"
                type="text"
                name=""
                placeholder="     Going to   "
                id=""
              />
              <input
                className="inputs-flights"
                type="text"
                name=""
                placeholder="   Thu,Nov 20  -  Sat, Nov 22 "
                id=""
              />
              <input
                className="inputs-flights"
                type="text"
                name=""
                placeholder="      1 adult . Economy "
                id=""
              />
              <br />
              <button
                type="button"
                class="btn btn-primary fs-4"
                id="submit-btn"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="main-flights">
        <p className="fs-3 fw-bold">
          <span className="text-primary"> Your Yatra.com </span>.Why book
          Flights with us
        </p>
        <div className="row">
          <div className=" col-3">
            <div className="cards-flight px-4 py-2 m-0 bg-light shadow">
              <p className="pt-4 fw-bold">Save & Cam </p>
              <p>
                Become a member to get exclusive discounts and earn Trip Coins
                which can be used just like cash
              </p>
            </div>
          </div>

          <div className="col-3">
            <div className="cards-flight px-4 py-2 m-0 bg-light shadow">
              <p className="pt-4 fw-bold"> We’re global </p>
              <p>
                Become a member to get exclusive discounts and earn Trip Coins
                which can be used just like cash
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="cards-flight px-4 py-2 m-0 bg-light shadow">
              <p className="pt-4 fw-bold"> support in Approx.30s </p>
              <p>
                Become a member to get exclusive discounts and earn Trip Coins
                which can be used just like cash
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="cards-flight px-4 py-2 m-0 bg-light shadow">
              <p className="pt-4 fw-bold">Great deals on the app</p>
              <p>
                Become a member to get exclusive discounts and earn Trip Coins
                which can be used just like cash
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5">
          <div>
            <img src={girldImage} alt="" />
          </div>
          <div>
            <img src={mapImage} alt="" />
          </div>
        </div>
        <p className="fs-4 fw-bold ps-4 pt-3 mt-3">Fly with our partner airlines</p>
        <div className="row">
          <div className=" col-3">
            <div className="cards2-flight bg-light shadow">
              <p className="pt-4 fw-bold">
                New York <span>Delhi</span>{" "}
              </p>
              <p>Wed, Dec19 - Wed. Dec 17</p>
            </div>
          </div>

          <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <p className="pt-4 fw-bold">
                {" "}
                New York <span>London</span>{" "}
              </p>
              <p>Wed, Dec19 - Wed. Dec 17</p>
            </div>
          </div>
          <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <p className="pt-4 fw-bold">
                {" "}
                Hong kong <span>singapore</span>{" "}
              </p>
              <p>Wed, Dec19 - Wed. Dec 17</p>
            </div>
          </div>
          <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <p className="pt-4 fw-bold">
                Hong Kong <span>Bangkok</span>{" "}
              </p>
              <p>Wed, Dec19 - Wed. Dec 17</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className=" col-3">
            <div className="cards2-flight bg-light shadow">
              <p className="pt-4 fw-bold">
                New York <span>Delhi</span>
              </p>
              <p>Wed, Dec19 - Wed. Dec 17</p>
            </div>
          </div>

          <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <p className="pt-4 fw-bold">
                {" "}
                New York <span>London</span>{" "}
              </p>
              <p>Wed, Dec19 - Wed. Dec 17</p>
            </div>
          </div>
          <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <p className="pt-4 fw-bold">
                {" "}
                Hong kong <span>singapore</span>{" "}
              </p>
              <p>Wed, Dec19 - Wed. Dec 17</p>
            </div>
          </div>
          <div className="col-3">
            <div className="cards2-flight bg-light shadow">
              <p className="pt-4 fw-bold">
                Hong Kong <span>Bangkok</span>
              </p>
              <p>Wed, Dec19 - Wed. Dec 17</p>
            </div>
          </div>
        </div>
        </div>
        <div className="flight-image-container d-flex">
          <div className="flight-image">
            <img src={FlightImage2} alt="" />
          </div>
          
            <div className="get-the-yatra-text1 me-5">
            <p className="fs-2 pt-3 fw-bold">Get the yatra.com app</p>
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
        </div>
        <div className="find-container">
          <p className="fs-4 fw-bold">Find Cheap Flights with Yatra.com</p>
          <div className="find-text-container d-flex">
          <div className="find-text">Cheap Flight Tickets to Popular Country</div>
          <div className="find-text ms-2">Cheap Flight Tickets to Popular Cities</div>
          <div className="find-text ms-2">Cheap Domestic Flight  Tickets</div>
          <div className="find-text ms-2">Cheap International Flight Tickets</div>
          </div>
          <div className="find-text mt-4">Popular Airlines & Airports</div>
        </div>

<div className="recomandation-flight">
        <div className="border border-secondary d-flex lh-lg pt-3 pb-5 my-4">
          <div className="ps-3">
           <ul className="list-recomandation-flight"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
          <div className="ps-5">
           <ul className="list-recomandation-flight"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
          <div className="ps-5">
           <ul className="list-recomandation-flight"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
          <div className="ps-5">
           <ul className="list-recomandation-flight"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
          <div className="ps-5">
           <ul className="list-recomandation-flight"><li> Flight to Singapore  </li>
           <li>Flight to Bhutan</li>
           <li> Flight to Nepal</li>
           <li> Flights to
            Vietnam </li>
           <li>Flight to Canada</li></ul>
          </div>
        </div>
        </div>
      <Footer />
    </>
  );
}
export default Flight;
