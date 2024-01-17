import React, { useState } from 'react'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title)

  const clickhandler = () => {
    setTitle('Updated')
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={clickhandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
