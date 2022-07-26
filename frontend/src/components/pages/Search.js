import React from 'react'
import Form from '../Form/Form'
import './Search.css';

function Search() {
  return (
    <section>
     <div className='SearchPage'>
        <div className='searchpage-container'>
          <div className='searchpage-info'>
            <h1>Search</h1>
              <p>insert info here</p>
          </div>
            <div className='form-container'>
                <Form/>
            </div>    
        </div>
      </div>
    
    </section>
  )
}

export default Search
