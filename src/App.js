import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
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

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
