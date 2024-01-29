import React, { useState } from "react";

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const FAKE_EXPENSES = [
  {
    id: 1,
    title: 'Rent',
    amount: 600,
    date: new Date(2022, 2, 3),
  },
  {
    id: 2,
    title: 'Car Payment',
    amount: 185,
    date: new Date(2023, 2, 5),
  },
  {
    id: 3,
    title: 'ISP',
    amount: 50,
    date: new Date(2023, 2, 27),
  },
  {
    id: 4,
    title: 'Phone Bill',
    amount: 20,
    date: new Date(2024, 2, 1),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(FAKE_EXPENSES)


  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
