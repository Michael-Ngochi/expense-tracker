import React from "react";
import "./ExpenseTable.css"


function ExpenseTable(
    {mydata,onRemove,total}
){
    function Rows(){


            function Removebtn({id}){
                return(
                    <button style={{background:"unset",border:"none"}} onClick={()=>onRemove(id)}><i className="bi bi-trash trashBtn"></i></button>
                )
            }

        const expRow= mydata.map((expense,index)=>{
            return (
                <tr className="rows" key={expense.id}>
                <td>{index+1}</td>
                <td>{<strong>{expense.name}</strong>}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{<Removebtn id={expense.id}/>}</td>
                </tr>
            )
        })
    return expRow
    }


return(
    <table className="ExpenseTable">
    <thead>
        <tr>
        <th>#</th>
        <th>Expense</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
    <Rows/>
    <tr className="totalRow">
    <td colSpan="4"><strong>Total</strong></td>
    <td>{total}</td>
    <td colSpan="2"></td>
    </tr>
    </tbody>
    </table>
)
}
export default ExpenseTable