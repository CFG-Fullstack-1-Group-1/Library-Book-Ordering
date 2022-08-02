import React, { useEffect, useState } from "react";
import "./SearchResultCard.css";
import CatInHat from "../images/CatInTheHat.jpg";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";

function SearchResultCard() {
  return (
    <div>
      {book && (
        <div className="sr-card">
          <img src={book.thumbnail} alt={"Book cover of " + book.title} />
          <div className="sr-bottom">
            <p className="result-title">{book.title}</p>
            <p className="result-info">{`Author ${book.authors}`}</p>
            <p className="result-info">{`Author ${book.publishedDate}`}</p>
            <p className="result-info">{`ISBN 10 ${book.isbn_10}`}</p>
          </div>
        </div>
      )}
      {/* Input stuff from test-page lines 95-104 for thuis */}
    </div>
  );
}
export default SearchResultCard;
