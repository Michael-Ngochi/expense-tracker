import React from "react";
import "./searchBox.css"

 function SearchBox({expenseName,handlesearch}){
    return(
        <form>
        <input className="search" type="text" placeholder="search....."></input>
        <button type="submit" onSubmit={handlesearch}>search</button>
        </form>
    )
 }
 export default SearchBox