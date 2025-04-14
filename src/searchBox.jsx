import React from "react";
import { useState } from "react";
import "./searchBox.css"

 function SearchBox({onSubmit}){
    const [term, setTerm] = useState("");
    const [category,setCategory]=useState("")
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
        const expense =e.target.term.value
        // console.log(expense)
        onSubmit(expense)
      }

    return(
        <form onSubmit={handlesearch} onChange={handleChange}>
        <input name="term" className="search" type="text" placeholder="search....." defaultValue={term}></input>

        <select name="category" type="text" onChange={handleCategoryChange}>
        <option value="">Select a category...</option>
        <option value="Housing">Housing</option>
        <option value="Utilites">Utilities</option>
        <option value="Transportation">Transportation</option>
        <option value="Food & Groceries">Food & Groceries</option>
        <option value="Personal & Health">Personal & Health</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Financial">Fianancial</option>
        <option value="Education">Education</option>
        <option value="Miscellaneous">Miscellaneous</option>
    </select>

    <button className="searchBtn" type="submit" >search  <i class="bi bi-search"></i></button>
        </form>
    )
 }
 export default SearchBox