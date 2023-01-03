import React from 'react';
import './App.css';
import { useGlobalContext } from './context';

const Search = () => {
  const {query, setQuery, isError}= useGlobalContext();

  return(
    <>
  <section className='search-section'>
    <h2>Search Your Favourite Movie Here </h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <div> 
        <input type="text"
        placeholder="Search Here"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        />
      </div>
    </form>
    <div className='card-error'>
      <p>{isError.show && isError.msg}</p>
    </div>
  </section>

  </>
  )
  
}

export default Search