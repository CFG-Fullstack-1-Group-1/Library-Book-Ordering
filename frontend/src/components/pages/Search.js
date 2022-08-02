import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Search.css';

function Search() {
  return (
    <section>
     <div className='SearchPage'>
        <div className='searchpage-container'>
          <div className='searchpage-info'>
            <h1>Search</h1>
            <h3>Please fill in the details of the book you'd like to search for</h3>
          </div>
            <SearchForm/>
        </div>
      </div>
    
    </section>
  )
}

export default Search;
