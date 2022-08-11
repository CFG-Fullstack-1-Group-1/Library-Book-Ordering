import React from "react";
import "./OrderConfirmation.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import ConfirmationIMG from "./confirmation-tick.png";

function BookDetails({ title, authors, year, open, onClose }) {
  // Keeps it closed if not told to be open
  if (!open) return null;
  // Navigate back to homepage if presses ok
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="confirmation-container">
      <div className="bookconf-overlay">
        <div className="bookconf-overlay-inner">
          <img
            src={ConfirmationIMG}
            alt="Confirmation tick"
            className="confirmation-img"
          />
          <h1 className="confirmation-title">Order Confirmed</h1>
          <div className="confirmation-inner-box">
            <h4>
              Your book request has been successfully sent to be ordered you
              should expect a response in 3 to 5 business days.
            </h4>
            <h3>Your order details are as follows:</h3>
            <div className="book-details">
              <p> Title: {title} </p>
              <p>Authors: {authors}</p>
              <p>Year: {year}</p>
            </div>
          </div>
          <div className="confirmation-btn-container">
            <button className="confirmation-btn" onClick={onClose}>
              New Order
            </button>
            <button className="confirmation-btn" onClick={navigateToHome}>
              OK
            </button>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
