import React from 'react';
import "../input.scss";
import "../../../styles/generics.scss";
import { IoIosSearch } from "react-icons/io";



const Search = () => {
  return (
    <div className='input_search'>

        <input
         type="text"
         placeholder='Type to search'
         className='input'
         />
         <span><IoIosSearch /></span>
      
    </div>
  )
}

export default Search
