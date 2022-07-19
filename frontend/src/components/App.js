import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [book, setBook] = useState(null);
  const [books, setBooks] = useState(null);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    getOrders();
  });

  function getBook() {
    fetch("/api/book/")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch book data");
        }
        return res.json();
      })
      .then((data) => {
        setBook(data.result);
      });
  }

  function getBooks() {
    fetch("/api/books/")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch book list data");
        }
        return res.json();
      })
      .then((data) => {
        setBooks(data.results.map((x) => x.result).join(", "));
      });
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

  function getOrders() {
    fetch("/api/orders/")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch orders list data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setOrders(data.map((x) => x.title).join(", "));
      });
  }

  return (
    <div>
      <button onClick={() => getBook()}>Book details</button>
      <p>{book}</p>
      <button onClick={() => getBooks()}>Book search</button>
      <p>{books}</p>
      <h2>Active Orders</h2>
      <p>{orders}</p>
      <input type="text" id="book-title" />
      <button onClick={() => createOrder()}>Create Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
