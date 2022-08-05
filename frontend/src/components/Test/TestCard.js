import React from "react";

function TestCard({ book }) {
  return (
    <div>
      <li key={book.google_books_id}>
        <div className="bookresults-card">
          <img src={book.small_thumbnail} alt={"Book cover of " + book.title} />
          <div className="bookresults-bottom">
            <p className="result-title">{book.title}</p>
            <p className="result-info">{`Author ${book.authors}`}</p>
            <p className="result-info">{`Year ${book.publishedDate}`}</p>
            <p className="result-info">{`ISBN 10 ${book.isbn_10}`}</p>
            {/* Connect GoogleBooks ID To this specific button and create a link to an overlay or page for it */}
            <button
              className="bookresults-btn"
              onClick={() => {
                setOpenBookDetails(true);
              }}
            >
              More Details
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default TestCard;
