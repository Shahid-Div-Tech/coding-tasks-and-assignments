import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import food from "../assets/logo.jpg";
function Header() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div>
            <img src={food} alt="food image" width="120px" />
          </div>
          <div className="col-md-3 mb-2 mb-md-0"></div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0  list-item">
            <li>
              <Link to="/" className="nav-link px-2 text-dark">
                Home
              </Link>
            </li>
            <li>
              <Link to="/addtocart" className="nav-link px-2 text-dark">
                Add To card <BsCart3 />
              </Link>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
