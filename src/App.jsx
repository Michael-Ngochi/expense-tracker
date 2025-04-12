import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ExpenseForm from './ExpenseForm'
import ExpenseTable from './ExpenseTable'
import './App.css'

function App() {
  return(
    <>
    <ExpenseForm/>
    <ExpenseTable/>
    </>
  )
}

export default App
