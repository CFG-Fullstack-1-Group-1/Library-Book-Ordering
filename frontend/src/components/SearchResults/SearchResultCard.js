import React, { useState } from "react";
import "./SearchResultCard.css";
import "../../../static/images/CatInTheHat.jpg";

function SearchResultCard() {
  return (
    <div>
      {book && (
    <div className="sr-card">
      <img src={book.thumbnail} alt={"Book cover of " + book.title} />
      <div className="sr-bottom">
        <p className="result-title">{book.title}</p>
            <p className="result-info">{`Author ${book.authors}`}</p>
            <p className="result-info">{`Year ${book.publishedDate}`}</p>
            <p className="result-info">{`ISBN 10 ${book.isbn_10}`}</p>
      </div>
    </div>
      )}
    </div>
  );
}
export default SearchResultCard;
