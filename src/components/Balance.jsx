import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {incomes,expenses}=useContext(GlobalContext);
  const incomeAmount= incomes.map(income => income.amount);
  const totalIncome=incomeAmount.reduce((acc,item) => acc + item,0);
  const expenseAmount=expenses.map(expense => expense.amount);
  const totalExpense=expenseAmount.reduce((acc,item) => acc + item,0);
  const total=(totalIncome - totalExpense).toFixed(2);



  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance" style={{color:total <= 0 ? "red" :"green"}}><span style={{color:"black"}}> RS </span>{total}</h1>
    </div>
  )
}
export default Balance;
