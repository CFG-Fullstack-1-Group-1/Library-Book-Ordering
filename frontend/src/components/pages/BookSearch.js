import React, {useState} from "react";

// We're changing the value
const [books, setBooks] = useState(null);

function BookSearch(search_term) {
  fetch(`/api/books/?q=${search_term}`)
    .then((res) => {
      if (!res.ok) {
        console.log(search_term);
        console.log(`/api/books/?q=${search_term}`);
        throw Error("Could not fetch book list data");
      }
      return res.json();
    })
      .then((data) => {
        
          console.log(data.results)
    //   setBooks(
    //     data.results.map((book) => (
    //       <li key={book.google_books_id}>
    //         <h1>{book.title}</h1>
    //         <h2>{book.authors}</h2>
    //         <img
    //           src={book.small_thumbnail}
    //           alt={"Book cover of " + book.title}
    //         ></img>
    //         <p>{`ISBN 10 ${book.isbn_10}`}</p>
    //         <p>{`ISBN 13 ${book.isbn_13}`}</p>
    //         <p>{`Google Books ID ${book.google_books_id}`}</p>
    //       </li>
    //     ))
    //   );
    });
}

export default BookSearch;
