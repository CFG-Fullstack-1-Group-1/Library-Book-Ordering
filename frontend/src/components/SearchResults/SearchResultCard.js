import React, { useEffect, useState } from "react";
import "./SearchResultCard.css";
import "../../../static/images/CatInTheHat.jpg";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";

function SearchResultCard() {
  return (
    // <div>
    //   {book && (
    <div className="sr-card">
      {/* <img src={book.thumbnail} alt={"Book cover of " + book.title} /> */}
      <img
        src="../../../static/images/CatInTheHat.jpg"
        alt="Cat in the hat book"
      />
      <div className="sr-bottom">
        {/* <p className="result-title">{book.title}</p>
            <p className="result-info">{`Author ${book.authors}`}</p>
            <p className="result-info">{`Year ${book.publishedDate}`}</p>
            <p className="result-info">{`ISBN 10 ${book.isbn_10}`}</p> */}
        <p className="result-title">Title</p>
        <p className="result-info">Author</p>
        {/* <p className="result-info">Year</p> */}
        <p className="result-info">1234567891</p>
      </div>
    </div>
    //   )}
    // </div>
  );
}
export default SearchResultCard;
