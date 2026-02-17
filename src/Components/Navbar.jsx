import React from 'react'
import { Link } from "react-router-dom";
import "../Components/Navbar.css"


const Navbar = () => {
  return (
    <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid shadow">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item li-text">
           <Link to="/" className="nav-link dropdown-item" aria-current="page">Hotel/Home</Link>
        </li>
        <li class="nav-item li-text">
           <Link to="/Flight" className="nav-link dropdown-item" aria-current="page">Flight</Link>
        </li>
        <li class="nav-item li-text">
           <Link to="/Flight_Hotel" className="nav-link dropdown-item" aria-current="page">Flight + Hotel</Link>
        </li>
        <li class="nav-item li-text">
           <Link to="/Trains" className="nav-link dropdown-item" aria-current="page">Trains</Link>
        </li><li class="nav-item li-text">
           <Link to="/Car" className="nav-link dropdown-item" aria-current="page">Car</Link>
        </li>
      </ul>
      
    </div>
    <form class="d-flex">
        <button class="btn btn-outline-primary me-4 " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Login/Register</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-success" id="exampleModalLabel">LOGIN HERE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label text-primary">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label text-primary">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label text-danger" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </form>
  </div>
</nav>

 </>
  )
}

export default Navbar;

