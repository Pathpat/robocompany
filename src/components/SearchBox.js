import React from "react";

//to onchange einai event poy syllegei to ti grafoyme sto input 
const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div >
        <input
        className="pa3 ba b--green bg-lightest-blue" 
        type='search' 
        placeholder="search robots"
        onChange={searchChange}/ > 
        
        </div>
    );
}

export default SearchBox;