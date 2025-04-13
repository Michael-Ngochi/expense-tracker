import React from 'react'
import { useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ExpenseForm from './ExpenseForm'
import ExpenseTable from './ExpenseTable'
import SearchBox from './searchBox'
import './App.css'
import expenses from './data/data'

function App() {
  // console.log (expenses);
  const [mydata,setData]=useState(expenses)


const handleAdd=(newExpense)=>{
  setData((prevData)=>[...prevData, newExpense])
  console.log(mydata)
}


const handleRemove = (id) => {
  setData((prev) => prev.filter((exp) => exp.id !== id))
  console.log(mydata);
}

const total = mydata.reduce((sum, exp) => sum + exp.amount, 0)


  return(
    <div className='mainBody'>
    <SearchBox />
    <div className='formTable'>
    <ExpenseForm onSubmit={handleAdd}/>
    <ExpenseTable mydata={mydata} onRemove={handleRemove} total={total}/>
    </div>
    </div>
  )
}

export default App
