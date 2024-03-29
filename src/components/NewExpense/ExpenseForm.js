import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [userTitle, setUserTitle] = useState('')
  const [userAmount, setUserAmount] = useState('')
  const [userDate, setUserDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   userTitle: '',
  //   userAmount: '',
  //   userAmount: '',
  // })

  //   const titleChangeHandler = (event) => {
  //     /* setUserInput({
  //       ...userInput,
  //       userTitle: event.target.value,
  //     })
  //     safer way to update state whenever you depend on previous state since React
  //     garantees that previous state is the lastest before updating
  //     setUserInput((prevState) => {
  //       return { ...prevState, userTitle: event.target.value }
  //     }) */
  //     setUserTitle(event.target.value)
  // }

  /* const amountChangeHandler = (event) => {
    setUserAmount(event.target.value)
  } */

  /* const dateChangeHandler = (event) => {
    setUserDate(event.target.value)
  } */

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setUserTitle(value)
    } else if (identifier === 'amount') {
      setUserAmount(value)
    } else {
      setUserDate(value)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: userTitle,
      amount: userAmount,
      date: new Date(userDate),
    }

    props.onSaveExpenseData(expenseData)

    setUserTitle('')
    setUserAmount('')
    setUserDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // two way binding to not just listen to input but also pass a value back to input
            value={userTitle}
            onChange={(event) =>
              inputChangeHandler('title', event.target.value)
            }
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userAmount}
            onChange={(event) =>
              inputChangeHandler('amount', event.target.value)
            }
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userDate}
            onChange={(event) => inputChangeHandler('date', event.target.value)}
            min="2021-01-01"
            max="2024-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
