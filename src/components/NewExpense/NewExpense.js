import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (userExpenseData) => {
    const expenseData = {
      ...userExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
