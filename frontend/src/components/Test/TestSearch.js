import React, { useEffect, useState } from "react";
import BookDetails from "./Modal/BookDetails";
import "./TestSearch.css";

function TestPage() {
  // Holds book details
  const [book, setBook] = useState(null);
  // Holds book search
  const [books, setBooks] = useState(null);
  // Show Book Details on click
  const [openBookDetails, setOpenBookDetails] = useState(false);

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
            <div >
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
                    <button
                      className="bookresults-btn"
                      onClick={() => {
                        fetch(`/api/book/${book.google_books_id}/`)
                        .then((res) => {
                          if (!res.ok) {
                            throw Error("Could not fetch book data");
                          }
                          return res.json();
                        })
                        .then((data) => {
                          setBook(data.result);
                          setOpenBookDetails(true);
                        });
                      }}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </li>
            </div>
          ))
        );
      });
  }

  return (
    // This is the Book Details overlay
    <div className="test-container">
      {openBookDetails && <BookDetails book={book} closeBookDetails={setOpenBookDetails} />}
      {/* Search tab with search button */}
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
        {/* This is the book search button*/}
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

