import React, { useEffect, useState } from "react";
import "./TestSearch.css";
import "../SearchForm/SearchForm.css";
import "../SearchResults/SearchResultCard.css";

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
              <div className="sr-card">
                <img
                  src={book.small_thumbnail}
                  alt={"Book cover of " + book.title}
                />
                <div className="sr-bottom">
                  <p className="result-title">{book.title}</p>
                  <p className="result-info">{`Author ${book.authors}`}</p>
                  <p className="result-info">{`Year ${book.publishedDate}`}</p>
                  <p className="result-info">{`ISBN 10 ${book.isbn_10}`}</p>
                  {/* Connect GoogleBooks ID To this specific button and create a link to an overlay or page for it */}
                  {/* Use logic from lines 12-24 and lines 92-93 from TestPage.js*/}
                </div>
                <button className="sr-details-btn">More Details</button>
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

      <div className="search-content">
        <div className=" form-inputs">
          <label htmlFor="title" className="form-label">
            <p>Title</p>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Title"
            id="search_term"
          ></input>
        </div>

        <button
          className="form-input-btn"
          type="submit"
          onClick={() => getBooks(document.querySelector("#search_term").value)}
        >
          Search
        </button>
      </div>
      {books && (
        <div id="book-search">
          <ul>{books}</ul>
        </div>
      )}
    </div>
  );
}

export default TestPage;
