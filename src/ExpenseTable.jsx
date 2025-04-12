import { useState } from "react";
import React from "react";
import "./ExpenseTable.css"
import expenses from "./data/data"

function Data(
    {data}
)
{
    return <td>{data}</td>
}

function Rows(){
    const [myExpenses,setExpenses] = useState(expenses)


    const handleRemove=(id)=>{
        const newexpenses=myExpenses.filter(expense =>expense.id !==id)
        console.log(newexpenses);
        setExpenses(newexpenses);
        // alert(("Removed"+id));
        }
    

        function Removebtn({id}){
            return(
                <button onClick={()=>handleRemove(id)}>Remove</button>
            )
        }

    

    const expRow= myExpenses.map((expense,index)=>{
        return (
            <tr key={expense.id}>
            <Data data={index+1}/>
            <Data data={expense.name}/>
            <Data data={expense.description}/>
            <Data data={expense.category}/>
            <Data data={expense.amount}/>
            <Data data={expense.date}/>
            <Data data={<Removebtn id={expense.id}/>}/>
            </tr>
        )
    })
return expRow
}



function ExpenseTable(){
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
        </tr>
    </thead>
    <tbody>
    <Rows/>
    <tr className="totalRow">
    <td colSpan="4"><strong>Total</strong></td>
    <td>{1}</td>
    <td></td>
    </tr>
    </tbody>
    </table>
)
}
export default ExpenseTable