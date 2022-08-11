import React from "react";
import OrderForm from "../OrderForm/OrderForm";
import { useLocation } from "react-router-dom";

function Order({ book }) {
  let bookData;
  // Try to load book data.
  try {
    bookData = useLocation().state.book;
  } catch (TypeError) {
    // If there's no book data, use an empty string.
    bookData = "";
  }

  return (
    <section>
      <div className="AboutUs">
        <div className="container">
          <h1>Order</h1>

          <div className="paragraph">
            <h3>Please input the order details for the requested book</h3>
            <OrderForm book={bookData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
