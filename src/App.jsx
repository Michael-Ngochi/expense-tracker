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
const [mydata,setData]=useState(expenses);
const [originalData,setOriginalData] = useState(expenses);


const handleAdd=(newExpense)=>{
  setData((prevData)=>[...prevData, newExpense])
  setOriginalData((prev)=>[...prev,newExpense])
  console.log(mydata)
}


const handleSearch=({term,category})=>{
console.log("Initiated serach for "+term)
const lowerTerm=term.toLowerCase();

const filtered=originalData.filter((exp)=>{
  const matchesTerm=
  exp.name.toLowerCase().includes(lowerTerm) ||
  exp.description.toLowerCase().includes(lowerTerm);
  console.log(`Filtering: category=${category}, expense.category=${exp.category}`);


  const matchedCategory=!category || exp.category.toLowerCase().trim() === category.toLowerCase().trim();
return matchesTerm && matchedCategory

}
);
setData(filtered);
};

const handleRemove = (id) => {
  setData((prev) => prev.filter((exp) => exp.id !== id))
  setOriginalData((prev) => prev.filter((exp) => exp.id !== id))
  
  console.log(mydata);
}

const total = mydata.reduce((sum, exp) => sum + exp.amount, 0)


  return(
    <div className='mainBody'>
    <h1>Expense Tracker</h1>
  
    <SearchBox onSubmit={handleSearch}/>
    <hr />
    <div className='formTable'>
    <ExpenseForm onSubmit={handleAdd}/>
    <ExpenseTable mydata={mydata} onRemove={handleRemove} total={total}/>
    </div>
    </div>
  )
}

export default App
