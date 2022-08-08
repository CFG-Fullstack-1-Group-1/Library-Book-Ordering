import React, { useEffect, useState } from "react";

function TestPage() {
  // Holds book details
  const [book, setBook] = useState(null);
  // Holds book search
  const [books, setBooks] = useState(null);
  const [orders, setOrders] = useState(null);

  // Calls getOrders on page load and when anything changes.
  useEffect(() => {
    getOrders();
  });

  // Get book details from Django API.
  function getBook(google_books_id) {
    fetch(`/api/book/${google_books_id}/`)
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

  // Get book search from Django API.
  function getBooks(search_term) {
    fetch(`/api/books/?q=${search_term}`)
      .then((res) => {
        if (!res.ok) {
          console.log(search_term)
          console.log(`/api/books/?q=${search_term}`)
          throw Error("Could not fetch book list data");
        }
        return res.json();
      })
      .then((data) => {
        setBooks(
          data.results.map((book) => (
            <li key={book.google_books_id}>
              <h1>{book.title}</h1>
              <h2>{book.authors}</h2>
              <img
                src={book.small_thumbnail}
                alt={"Book cover of " + book.title}
              ></img>
              <p>{`ISBN 10 ${book.isbn_10}`}</p>
              <p>{`ISBN 13 ${book.isbn_13}`}</p>
              <p>{`Google Books ID ${book.google_books_id}`}</p>
            </li>
          ))
        );
      });
  }

  // Add an order to the Django database.
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

  // Get all the orders from the Django database.
  function getOrders() {
    fetch("/api/orders/")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch orders list data");
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data.map((x) => x.title).join(", "));
      });
  }

  return (
    <div>
      <input type='text' placeholder='Google books id' id='google_books_id'></input>
      <button onClick={() => getBook(document.querySelector('#google_books_id').value)}>Book details</button>
      {book && (
        <div id="book-details">
          <h1>{book.title}</h1>
          <h2>{book.authors}</h2>
          <img src={book.thumbnail} alt={"Book cover of " + book.title}></img>
          <p>{`ISBN10: ${book.isbn_10}`}</p>
          <p>{`ISBN13: ${book.isbn_13}`}</p>
          <p>{`Google Books ID: ${book.google_books_id}`}</p>
          <p>{`Publisher: ${book.publisher}`}</p>
          <p>{`Category: ${book.category}`}</p>
          <p>{`Description: ${book.description}`}</p>
        </div>
      )}

<input type='text' placeholder='Search term' id='search_term'></input>
      <button onClick={() => getBooks(document.querySelector('#search_term').value)}>Book search</button>
      {books && (
        <div id="book-search">
          <ul>{books}</ul>
        </div>
      )}
      <h2>Active Orders</h2>
      <p>{orders}</p>
      <input type="text" id="book-title" />
      <button onClick={() => createOrder()}>Create Order</button>
    </div>
  );
}

export default TestPage;
