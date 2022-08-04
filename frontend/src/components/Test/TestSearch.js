import React, { useEffect, useState } from "react";
import "./TestSearch.css";

function TestPage() {
  // Holds book details
  const [book, setBook] = useState(null);
  // Holds book search
  const [books, setBooks] = useState(null);

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
    fetch(`/api/books/?q="${search_term}"`)
      // tinker with aboive ^
      .then((res) => {
        if (!res.ok) {
          console.log(search_term);
          console.log(`/api/books/?q="${search_term}"`);
          throw Error("Could not fetch book list data");
        }
        return res.json();
      })
      .then((data) => {
        // This is what is shown on the search results tab
        setBooks(
          data.results.map((book) => (
            <li key={book.google_books_id}>
              <div className="bookresults-card">
                <img
                  src={book.small_thumbnail}
                  alt={"Book cover of " + book.title}
                />
                <div className="bookresults-bottom">
                  <p className="result-title">{book.title}</p>
                  <p className="result-info">{`Author ${book.authors}`}</p>
                  <p className="result-info">{`Year ${book.publishedDate}`}</p>
                  <p className="result-info">{`ISBN 10 ${book.isbn_10}`}</p>
                  {/* Connect GoogleBooks ID To this specific button and create a link to an overlay or page for it */}
                </div>
                <button className="bookresults-btn">More Details</button>
                {/* Onclick --> pass in the book.google_books_id */}
                {/* Dynamically code it or pull it up through it */}
              </div>
            </li>
          ))
        );
      });
  }

  return (
    <div className="test-container">
      {book && (
        <div id="book-details">
          <h1>{book.title}</h1>
          <h2>{book.authors}</h2>
          <img src={book.thumbnail} alt={"Book cover of " + book.title}></img>
          <p>{`ISBN 10 ${book.isbn_10}`}</p>
          <p>{`ISBN 13 ${book.isbn_13}`}</p>
          <p>{`Google Books ID ${book.google_books_id}`}</p>
          <p>{`Publisher ${book.publisher}`}</p>
          <p>{`Category ${book.category}`}</p>
          <p>{`Description ${book.description}`}</p>
        </div>
      )}

      {/* Search tab with searc button */}
      <div className="searchtab-container">
        <div className="search-input-container">
          <label htmlFor="title" className="searchtab-label">
            <p>Search for your book</p>
          </label>
          <input
            type="text"
            className="search-input"
            placeholder="Title"
            id="search_term"
          ></input>
        </div>

        <button
          className="search-btn"
          type="submit"
          onClick={() => getBooks(document.querySelector("#search_term").value)}
        >
          Search
        </button>
      </div>
      {books && (
        <div id="book-search-results">
          {/* This displays all the book results in an unordered list format */}
          <ul>{books}</ul>
        </div>
      )}
    </div>
  );
}

export default TestPage;
