import React, { useState } from "react";
import "./OrderForm.css";
import OrderConfirmation from "./OrderConfirmation";
{
  /* Validation React Hook Tutorial Using by Brian Design from https://youtu.be/KGFG-yQD7Dw?t=767 */
  // Troubleshooting controlled components with: https://www.youtube.com/watch?v=IkMND33x0qQ
}

function OrderForm({ book }) {

  // This refreshes the page if an order is cancelled
  function refreshForm() {
    window.location.reload(false);
  }

  // This will bring up the Order Confirmation Modal
  const [openOrderConfirmation, setOpenOrderConfirmation] = useState(false);

  // This assigns each prop from bookdata into each field
  const [title, setTitle] = useState(book.title);
  const [authors, setAuthor] = useState(book.authors);
  const [year, setYear] = useState(book.year);
  const [publisher, setPublisher] = useState(book.publisher);
  const [category, setCategory] = useState(book.category);
  const [isbn10, setIsbn10] = useState(book.isbn_10);
  const [isbn13, setIsbn13] = useState(book.isbn_13);

  // Setting up order values
  const [orders, setOrders] = useState(null);
  //Creating an order to send to Django API and DB
  function createOrder(event) {
    event.preventDefault();
    const csrftoken = document.querySelector(
      "[name=csrfmiddlewaretoken]"
    ).value;
    const bookTitle = document.querySelector("#title").value;
    const bookAuthors = document.querySelector("#author").value;
    const bookYear = document.querySelector("#year").value;
    const bookPublisher = document.querySelector("#publisher").value;
    const bookCategory = document.querySelector("#category").value;
    const bookISBN10 = document.querySelector("#isbn-10").value;
    const bookISBN13 = document.querySelector("#isbn-13").value;
    const borrowerID = document.querySelector("#borrower-id").value;
    const borrowerName = document.querySelector("#borrower-name").value;
    const bookGoogleBooksId = book.google_books_id;

    fetch("http://localhost:8000/api/orders/", {
      method: "POST",
      headers: { "X-CSRFToken": csrftoken, "Content-Type": "application/json" },
      body: JSON.stringify({
        borrower: {
          id: borrowerID,
          name: borrowerName,
        },
        book: {
          title: bookTitle,
          authors: bookAuthors,
          year: bookYear,
          publisher: bookPublisher,
          category: bookCategory,
          isbn_10: bookISBN10,
          isbn_13: bookISBN13,
          google_books_id: bookGoogleBooksId,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOpenOrderConfirmation(true);
      });
  }

  return (
    <div>
      {openOrderConfirmation && (
        <OrderConfirmation
          title={title}
          authors={authors}
          year={year}
          open={openOrderConfirmation}
          onClose={() => setOpenOrderConfirmation(false)}
        />
      )}
      {!openOrderConfirmation && (
        <div className="form-container">
          <div className="form-content">
            <form onSubmit={createOrder} className="form">
              {/* Indvidual codeblock for  each form box input*/}
              {/* Input for Book title */}
              <div className=" form-inputs">
                <label htmlFor="title" className="form-label">
                  <p>Title</p>
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  className="form-input"
                  placeholder="Title of Book"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Input for author*/}
              <div className="form-inputs">
                <label htmlFor="author" className="form-label">
                  <p>Author</p>
                </label>
                <input
                  id="author"
                  type="text"
                  name="author"
                  className="form-input"
                  placeholder="Author of Book"
                  value={authors}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              {/* Input for Year*/}
              <div className="form-inputs">
                <label htmlFor="year" className="form-label">
                  <p>Year</p>
                </label>
                <input
                  id="year"
                  type="number"
                  name="year"
                  className="form-input"
                  placeholder="Year of Book"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  min="1000"
                  max="2030"
                />
              </div>

              {/* Input for Publisher */}
              <div className="form-inputs">
                <label htmlFor="Publisher" className="form-label">
                  <p>Publisher</p>
                </label>
                <input
                  id="publisher"
                  type="text"
                  name="Publisher"
                  className="form-input"
                  placeholder="Publisher of Book"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </div>

              {/* Input for Category */}
              <div className="form-inputs">
                <label htmlFor="Category" className="form-label">
                  <p>Category</p>
                </label>
                <input
                  id="category"
                  type="text"
                  name="Category"
                  className="form-input"
                  placeholder="Category of Book"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              {/* Input for ISBN10 */}
              <div className="form-inputs">
                <label htmlFor="ISBN10" className="form-label">
                  <p>ISBN10</p>
                </label>
                <input
                  id="isbn-10"
                  type="number"
                  name="ISBN10"
                  maxLength="10"
                  size="10"
                  className="form-input"
                  placeholder="ISBN10 of Book"
                  value={isbn10}
                  onChange={(e) => setIsbn10(e.target.value)}
                />
              </div>

              {/* Input for ISBN13 */}
              <div className="form-inputs">
                <label htmlFor="ISBN13" className="form-label">
                  <p>ISBN13</p>
                </label>
                <input
                  id="isbn-13"
                  type="number"
                  name="ISBN13"
                  maxLength="13"
                  size="13"
                  className="form-input"
                  placeholder="ISBN13 of Book"
                  value={isbn13}
                  onChange={(e) => setIsbn13(e.target.value)}
                />
              </div>

              {/* Use this for the ORDER FORM NOT SEARCH FORM */}
              {/* Input for Borrower ID */}
              <div className="form-inputs">
                <label htmlFor="Borrower ID" className="form-label">
                  <p>Borrower ID</p>
                </label>
                <input
                  id="borrower-id"
                  type="number"
                  name="Borrower ID"
                  className="form-input"
                  placeholder="Borrower ID"
                />
              </div>

              {/* Input for Borrower Name */}
              <div className="form-inputs">
                <label htmlFor="Borrower Name" className="form-label">
                  <p>Borrower Name</p>
                </label>
                <input
                  id="borrower-name"
                  type="text"
                  name="Borrower Name"
                  className="form-input"
                  placeholder="Borrower Name"
                />
              </div>
              <div className="form-button-container">
                <button className="form-input-btn" onClick={refreshForm}>
                  Cancel
                </button>
                <input type="submit" className="form-input-btn" value="Order" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderForm;
