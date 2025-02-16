import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Expense from './Expense'
import Income from './Income'

const TransactionList = () => {
  const {incomes,expenses}=useContext(GlobalContext)
  
  
  
  return (
    <>
    <h3>History</h3>
    <ul  className='list'>
      {incomes.map(income =>(
        <Income key={income.id} income={income}/>     

      ))}
       {expenses.map(expense =>(
         <Expense key={expense.id} expense={expense} />     

      ))}
     
        </ul>
      
    </>
  )
}

export default TransactionList
