import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Flight from "./Components/Flight";
import Trains from "./Components/Trains"
import FlightHotel from "./Components/Flight_Hotel";
import Car from "./Components/Car";
import HotelHomeBooking from "./Components/Hotel_home_booking";
import FlightBooking from "./Components/Flight_booking";
import FlightHotelBooking from "./Components/Flight_hotel_booking";
import TrainsBooking from "./Components/Trains_booking";
import CarBooking from "./Components/Car_booking";


function App() {
  return (
    <Router>
     
     
     
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/flight" element={<Flight />} />
         <Route path="/flight_Hotel" element={<FlightHotel/>} />
         <Route path="/trains" element={<Trains />} />
         <Route path="/car" element={<Car />} />
         <Route path="/Hotel_home_booking" element={<HotelHomeBooking/>} />
         <Route path="/Flight_booking" element={<FlightBooking/>} />
         <Route path="/Flight_hotel_booking" element={<FlightHotelBooking/>} />
         <Route path="/Trains_booking" element={<TrainsBooking/>} />
         <Route path="/Car_booking" element={<CarBooking/>} />
        </Routes>
      
    </Router>
  );
}

export default App;