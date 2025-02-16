import React , { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {
  const {incomes,expenses}=useContext(GlobalContext)
  const incomeAmount= incomes.map(income => income.amount);
  const totalIncome=incomeAmount.reduce((acc,item) => acc + item,0);
  const expenseAmount=expenses.map(expense => expense.amount);
  const totalExpense=expenseAmount.reduce((acc,item) => acc + item,0);

  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p  className='money-plus'>{totalIncome.toFixed(2)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p  className='money-minus'>{totalExpense.toFixed(2)}</p>
        </div>

      
    </div>
  )
}

export default IncomeExpense

