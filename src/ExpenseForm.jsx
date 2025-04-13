import React from "react";
import addIcon from "./assets/addIcon.png"
import "./ExpenseForm.css"

function ExpenseForm (
    {onSubmit}
){
    const handleSubmit = (e) => {
        e.preventDefault()
        const newExpense = {
          id: Date.now(), // generate unique ID
          name: e.target.name.value,
          description: e.target.description.value,
          category: e.target.category.value,
          amount: parseFloat(e.target.amount.value),
          date: e.target.date.value,
        }
        console.log(newExpense)
        onSubmit(newExpense)
      }
    return(
    <>
    <div className="expenseContainer">
    <h2>Enter expense details</h2>
    <form onSubmit={handleSubmit} className="expenseForm">
    <input name="name" type="text" placeholder="Expense"></input>
    <input name="description" type="text" placeholder="Description"></input>
    <select name="category" type="text">
        <option value="">Select a category...</option>
        <option value="Housing">Housing</option>
        <option value="Utilites">Utilities</option>
        <option value="Transportation">Transportation</option>
        <option value="Food & Groceties">Food & Groceties</option>
        <option value="Personal & Health">Personal & Health</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Financial">Fianancial</option>
        <option value="Education">Education</option>
        <option value="Miscellaneous">Miscellaneous</option>
    </select>
    <input name="amount" type="text" placeholder="Amount"></input>
    <input name="date" type="date"></input>
    <button  type="Submit">Add <img width="30px" src={addIcon} alt="" /></button>
    </form>
    </div>
    </>
    )
}

export default ExpenseForm;