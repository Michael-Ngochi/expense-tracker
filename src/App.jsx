import React from 'react'
import { useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ExpenseForm from './ExpenseForm'
import ExpenseTable from './ExpenseTable'
import SearchBox from './searchBox'
import './App.css'
import expenses from './data/data'
import { PieChart } from '@mui/x-charts/PieChart';

function App() {
  // console.log (expenses);
const [mydata,setData]=useState(expenses);
const [originalData,setOriginalData] = useState(expenses);
// const [chartData.setChartData]=useState(0);

const chartData = () => {
  const aggregatedData = originalData.reduce((acc, data) => {
    // If the category already exists, add the value
    if (acc[data.category]) {
      acc[data.category].value += data.amount;
    } else {
      // Otherwise, create a new entry
      acc[data.category] = {
        id: data.id,
        label: data.category,
        value: data.amount,
      };
    }
    return acc;
  }, {});

  // Convert aggregated data into an array
  return Object.values(aggregatedData);
};

const handleAdd=(newExpense)=>{
  setData((prevData)=>[...prevData, newExpense])
  setOriginalData((prev)=>[...prev,newExpense])
  console.log(mydata)
}


const handleSearch = ({ term, category, sortBy }) => {
  console.log("Initiated search for " + term);
  const lowerTerm = term.toLowerCase();

  let filtered = originalData.filter((exp) => {
    const matchesTerm =
      exp.name.toLowerCase().includes(lowerTerm) ||
      exp.description.toLowerCase().includes(lowerTerm);

    const matchedCategory =
      !category || exp.category.toLowerCase().trim() === category.toLowerCase().trim();

    return matchesTerm && matchedCategory;
  });

  // Sort the filtered data
  if (sortBy === 'category') {
    filtered.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === 'amount') {
    filtered.sort((a, b) => a.amount - b.amount);
  }

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
    <div className='topArea'>
    <div className='chartContainer'>
    <PieChart
  series={[{data:chartData()},
    
  ]}
 
  width={500}
  height={250}
/> 
</div>
<ExpenseForm onSubmit={handleAdd}/>
</div>
    <hr />
    <div className='formTable'>
    
    <div>
    <SearchBox onSubmit={handleSearch}/>
    <ExpenseTable mydata={mydata} onRemove={handleRemove} total={total}/>
    </div>
    </div>
    </div>
  )
}

export default App
