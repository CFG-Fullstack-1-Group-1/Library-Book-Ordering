import React from "react";
import "./BookDetails.css";

// Used https://www.youtube.com/watch?v=ZCvemsUfwPQ to design closing and opening of pop-up

function BookDetails({ book, closeBookDetails }) {
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close-btn" onClick={() => closeBookDetails(false)}>
            Close
          </button>
          <h1>{book.title}</h1>
          <div className="inner-box">
            <img src={book.thumbnail} alt={"Book cover of " + book.title} />
            <div className="book-details">
              <h2>{book.authors}</h2>
              <p>{`ISBN10: ${book.isbn_10}`}</p>
              <p>{`ISBN13: ${book.isbn_13}`}</p>
              <p>{`Google Books ID: ${book.google_books_id}`}</p>
              <p>{`Publisher: ${book.publisher}`}</p>
              <p>{`Category: ${book.category}`}</p>
            </div>
          </div>
          <p>Description</p>
          <p>{`${book.description}`}</p>
          <button onClick={() => closeBookDetails(false)}>Cancel</button>
          <button>Book details</button>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
