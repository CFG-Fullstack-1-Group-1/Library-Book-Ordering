import React from "react";
import "./OrderConfirmation.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";

function BookDetails({ open, onClose }) {
  // Keeps it closed if not told to be open
  if (!open) return null;
  // Navigate back to homepage if presses ok
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <h1 className="book-title">Thank you for your order!</h1>
        <div className="inner-box">
          <h4>Your order details are as follows:</h4>
          <div className="book-details"></div>
        </div>
        <button className="bookdetails-btn" onClick={onClose}>
          New Order
        </button>
        <button className="bookdetails-btn" onClick={navigateToHome}>
          OK
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default BookDetails;
