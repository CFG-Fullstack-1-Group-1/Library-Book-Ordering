import React from "react";
import useSearchForm from "./useSearchForm";
import validateSearchInfo from "./validateSearchInfo";
import "./SearchForm.css";
{
  /* Validation React Hook Tutorial Using by Brian Design from https://youtu.be/KGFG-yQD7Dw?t=767 */
}

function SearchForm() {
  const { handleChange, values, handleSubmit, errors } =
    useSearchForm(validateSearchInfo);

  return (
    <div className="form-container">
      <div className="form-content">
        <form action="" className="form" onSubmit={handleSubmit}>
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
              value={values.title}
              onChange={handleChange}
            />
            {errors.title && <p className="error-message">{errors.title}</p>}
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
              value={values.author}
              onChange={handleChange}
            />
            {errors.author && <p className="error-message">{errors.author}</p>}
          </div>

          {/* Input for Publisher */}
          <div className="form-inputs">
            <label htmlFor="publisher" className="form-label">
              <p>Publisher</p>
            </label>
            <input
              id="publisher"
              type="text"
              name="publisher"
              className="form-input"
              placeholder="Publisher of Book"
            />
          </div>

          <button className="form-input-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
