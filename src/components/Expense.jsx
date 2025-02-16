import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Expense = ({expense}) => {
  const {deleteExpense}=useContext(GlobalContext);
  return (
    <li key={expense.id} className='minus'>
         {expense.text}<span>RS {expense.amount}</span>
         <button onClick={() => deleteExpense(expense.id)} className='delete-btn'>x</button>
      </li>
  )
}

export default Expense
