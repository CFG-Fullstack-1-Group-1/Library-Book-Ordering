import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import styles from "./Form.module.css";
{
  /* Validation React Hook Tutorial Using by Brian Design from https://youtu.be/KGFG-yQD7Dw?t=767 */
}

function Form() {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);

  return (
    <div className={styles["form-content-right"]}>
      <form action="" className={styles["form"]} onSubmit={handleSubmit}>
        <h1>
          Please fill in the details of the book you'd like to search for:
        </h1>

        {/* Indvidual codeblock for  each form box input*/}
        {/* Input for Book title */}
        <div className={styles["form-inputs"]}>
          <label htmlFor="title" className={styles["form-label"]}>
            <p>Title</p>
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className={styles["form-input"]}
            placeholder="Title of Book"
            value={values.title}
            onChange={handleChange}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </div>

        {/* Input for author*/}
        <div className={styles["form-inputs"]}>
          <label htmlFor="author" className={styles["form-label"]}>
            <p>Author</p>
          </label>
          <input
            id="author"
            type="text"
            name="author"
            className={styles["form-input"]}
            placeholder="Author of Book"
            value={values.author}
            onChange={handleChange}
          />
          {errors.author && <p className="error-message">{errors.author}</p>}
        </div>

        {/* Input for Year*/}
        <div className={styles["form-inputs"]}>
          <label htmlFor="year" className={styles["form-label"]}>
            <p>Year</p>
          </label>
          <input
            id="year"
            type="number"
            name="year"
            className={styles["form-input"]}
            placeholder="Year of Book"
            value={values.year}
            onChange={handleChange}
            // min='1000'
            // max='2030'
          />
          {errors.year && <p className="error-message">{errors.year}</p>}
        </div>

        {/* Input for Publisher */}
        <div className={styles["form-inputs"]}>
          <label htmlFor="Publisher" className={styles["form-label"]}>
            <p>Publisher</p>
            <input
              id="Publisher"
              type="text"
              name="Publisher"
              className={styles["form-input"]}
              placeholder="Publisher of Book"
            />
          </label>
        </div>

        {/* Input for Category */}
        <div className={styles["form-inputs"]}>
          <label htmlFor="Category" className={styles["form-label"]}>
            <p>Category</p>
            <input
              id="Category"
              type="text"
              name="Category"
              className={styles["form-input"]}
              placeholder="Category of Book"
            />
          </label>
        </div>

        {/* Input for ISBN10 */}
        <div className={styles["form-inputs"]}>
          <label htmlFor="ISBN10" className={styles["form-label"]}>
            <p>ISBN10</p>
            <input
              id="ISBN10"
              type="number"
              name="ISBN10"
              maxLength="10"
              size="10"
              className={styles["form-input"]}
              placeholder="ISBN10 of Book"
            />
          </label>
        </div>

        {/* Input for ISBN13 */}
        <div className={styles["form-inputs"]}>
          <label htmlFor="ISBN13" className={styles["form-label"]}>
            <p>ISBN13</p>
            <input
              id="ISBN13"
              type="number"
              name="ISBN13"
              maxLength="13"
              size="13"
              className={styles["form-input"]}
              placeholder="ISBN13 of Book"
            />
          </label>
        </div>

        {/* Use this for the ORDER FORM NOT SEARCH FORM */}
        {/* Input for Borrower ID */}
        {/* <div className={styles["form-inputs"]}>
          <label 
          htmlFor="Borrower ID" 
          className={styles["form-label"]}>
            <p>Borrower ID</p>
            <input 
            type="number" 
            name='Borrower ID'
            className={styles["form-input"]} 
            placeholder='Borrower ID'
            />
          </label>
        </div> */}

        {/* Input for Borrower Name */}
        {/* <div className={styles["form-inputs"]}>
          <label 
          htmlFor="Borrower Name" 
          className={styles["form-label"]}>
            <p>Borrower Name</p>
            <input 
            type="text" 
            name='Borrower Name'
            className={styles["form-input"]} 
            placeholder='Borrower Name'
            />
          </label>
        </div>  */}

        <button className={styles["form-input-btn"]} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;
