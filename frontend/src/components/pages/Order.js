import React from "react";
import OrderForm from "../Form/OrderForm";

function Order({ book }) {
  if (!book) {
    book = null;
  }

  return (
    <section>
      <div className="AboutUs">
        <div className="container">
          <h1>Order</h1>

          <div className="paragraph">
            <h3>Please input the order details for the requested book</h3>
            <OrderForm book={book} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
