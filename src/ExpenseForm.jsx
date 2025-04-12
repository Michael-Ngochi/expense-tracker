import React from "react";

function ExpenseForm (){
    return(
    <>
    <div>
    <h2>Enter expense details</h2>
    <form>
    <input type="text" placeholder="Expense"></input>
    <input type="text" placeholder="Description"></input>
    <input type="text" placeholder="Category"></input>
    <input type="text" placeholder="Amount"></input>
    <input type="date"></input>
    </form>
    </div>
    </>
    )
}

export default ExpenseForm;