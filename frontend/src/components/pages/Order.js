import React from "react";
import OrderForm from "../Form/OrderForm";

function Order({ book }) {
  const [orders, setOrders] = useState(null);
  if (!book) {
    book = null;
  }

  function createOrder() {
    const csrftoken = document.querySelector(
      "[name=csrfmiddlewaretoken]"
    ).value;
    const bookTitle = document.querySelector("#book-title").value;

    fetch("http://localhost:8000/api/orders/", {
      method: "POST",
      headers: { "X-CSRFToken": csrftoken, "Content-Type": "application/json" },
      body: JSON.stringify({ title: bookTitle }),
    }).then(() => {
      console.log("new order added");
      getOrders();
    });
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
