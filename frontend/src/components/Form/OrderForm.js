import React, { useState } from 'react';
import useOrderForm from './useOrderForm';
import validateOrderInfo from './validateOrderInfo';
import './OrderForm.css';
{/* Validation React Hook Tutorial Using by Brian Design from https://youtu.be/KGFG-yQD7Dw?t=767 */}


function OrderForm({ book }) {

  const {handleChange, values, handleSubmit, errors} = useOrderForm(validateOrderInfo);
  const [title, setTitle] = useState(book.title);
  console.log(book)
  return (
    <div className="form-container">
    <div className="form-content">

      <form action="" className="form" onSubmit={handleSubmit}>

{/* Indvidual codeblock for  each form box input*/}
{/* Input for Book title */}
        <div className=" form-inputs">
          <label 
          htmlFor="title" 
          className="form-label">
            <p>Title</p>
          </label>
            <input 
            id='title'
            type="text" 
            name='title'
            className="form-input" 
            placeholder='Title of Book'
            value={title}
            onChange={handleChange}
            />
            {errors.title && <p className='error-message'>{errors.title}</p>}
        </div>

{/* Input for author*/}
        <div className="form-inputs">
          <label 
          htmlFor="author" 
          className="form-label">
            <p>Author</p>
          </label>
            <input 
            id='author'
            type="text" 
            name='author'
            className="form-input" 
            placeholder='Author of Book'
            value={values.author}
            onChange={handleChange}
            />
          {errors.author && <p className='error-message'>{errors.author}</p>}
        </div>

{/* Input for Year*/}
        <div className="form-inputs">
          <label 
          htmlFor="year" 
          className="form-label">
            <p>Year</p>
          </label>
            <input 
            id='year'
            type="number" 
            name='year'
            className="form-input" 
            placeholder='Year of Book'
            value={values.year}
            onChange={handleChange}
            // min='1000'
            // max='2030'
            />
          {errors.year && <p className='error-message'>{errors.year}</p>}
        </div>

{/* Input for Publisher */}
        <div className="form-inputs">
          <label 
          htmlFor="Publisher" 
          className="form-label">
            <p>Publisher</p>
          </label>
            <input 
            id='Publisher'
            type="text" 
            name='Publisher'
            className="form-input" 
            placeholder='Publisher of Book'
            />
        </div>

{/* Input for Category */}
<div className="form-inputs">
          <label 
          htmlFor="Category" 
          className="form-label">
            <p>Category</p>
          </label>
            <input 
            id='Category'
            type="text" 
            name='Category'
            className="form-input" 
            placeholder='Category of Book'
            />
        </div>

{/* Input for ISBN10 */}
<div className="form-inputs">
          <label 
          htmlFor="ISBN10" 
          className="form-label">
            <p>ISBN10</p>
          </label>
            <input 
            id='ISBN10'
            type="number" 
            name='ISBN10'
            maxLength='10'
            size='10'
            className="form-input" 
            placeholder='ISBN10 of Book'
            />
        </div>

{/* Input for ISBN13 */}
<div className="form-inputs">
          <label 
          htmlFor="ISBN13" 
          className="form-label">
            <p>ISBN13</p>
          </label>
            <input 
            id='ISBN13'
            type="number" 
            name='ISBN13'
            maxLength='13'
            size='13'
            className="form-input" 
            placeholder='ISBN13 of Book'
            />
        </div>
 
 {/* Use this for the ORDER FORM NOT SEARCH FORM */}
{/* Input for Borrower ID */}
<div className="form-inputs">
          <label 
          htmlFor="Borrower ID" 
          className="form-label">
            <p>Borrower ID</p>
          </label>
            <input 
            type="number" 
            name='Borrower ID'
            className="form-input" 
            placeholder='Borrower ID'
            />
        </div>

{/* Input for Borrower Name */}
<div className="form-inputs">
          <label 
          htmlFor="Borrower Name" 
          className="form-label">
            <p>Borrower Name</p>
          </label>
            <input 
            type="text" 
            name='Borrower Name'
            className="form-input" 
            placeholder='Borrower Name'
            />
        </div> 

        <button 
        className="form-input-btn"
        type='submit'>
          Order 
        </button>

        <button 
        className="form-input-btn">
          Cancel 
        </button>
        
        
      </form>
    </div>
  </div>
  )
}

export default OrderForm;