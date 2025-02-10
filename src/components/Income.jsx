import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Income = ({income}) => {
  const {deleteIncome}=useContext(GlobalContext)
  return (
    <li key={income.id} className='plus'>
    {income.text}<span>RS{ Math.abs(income.amount)}</span>
    <button onClick={()=> deleteIncome(income.id)} className='delete-btn'>x</button>
 </li>

  )
}

export default Income
