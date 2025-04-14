import React from "react";
import { useState } from "react";
import "./searchBox.css"

 function SearchBox({onSubmit}){
    const [term, setTerm] = useState("");
    const [category,setCategory]=useState("")
    const [sortBy, setSortBy] = useState("");

    const handleSortChange = (e) => {
      const value = e.target.value;
      setSortBy(value);
      onSubmit({ term, category, sortBy: value });
    };

    const handleChange=(e)=>{
        const value = e.target.value;
        setTerm(value);
        onSubmit({term:value,category});
    }
    
    const handleCategoryChange = (e) => {
        const value=e.target.value;
        setCategory(value);
        onSubmit({term,category:value})
        console.log("Category selected:", e.target.value);
      };

    const handlesearch = (e) => {
        e.preventDefault()
        // const expense =e.target.term.value
        // console.log(expense)
        onSubmit({ term, category, sortBy })
      }

    return(
        <form onSubmit={handlesearch}>
        <input onChange={handleChange} name="term" className="search" type="text" placeholder="search....." defaultValue={term}></input>

        <select name="category" type="text" onChange={handleCategoryChange}>
        <option value="">Select a category...</option>
        <option value="Housing">Housing</option>
        <option value="Utilities">Utilities</option>
        <option value="Transportation">Transportation</option>
        <option value="Food & Groceries">Food & Groceries</option>
        <option value="Personal & Health">Personal & Health</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Financial">Fianancial</option>
        <option value="Education">Education</option>
        <option value="Miscellaneous">Miscellaneous</option>
    </select>

    <select value={sortBy} onChange={handleSortChange}>
        <option value="">Sort By...</option>
        <option value="category">Category</option>
        <option value="amount">Amount</option>
      </select>

    {/* <button className="searchBtn" type="submit" >search  <i className="bi bi-search"></i></button> */}
        </form>
    )
 }
 export default SearchBox