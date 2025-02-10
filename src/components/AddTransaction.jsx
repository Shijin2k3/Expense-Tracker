import React, { useState,useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text,setText]=useState("");
  const [amount,setAmount]=useState();
  const {addIncome,addExpense}=useContext(GlobalContext);

  const handleSubmit =(e,type) =>{
      e.preventDefault(); 
      
      if(!text || !amount){
        alert("Please Enter  text and amount")
        return;
      }
      const newTransaction={
        id:Math.floor(Math.random() * 1000000),
        text,
        amount:+amount,
      };
      if(type === "income"){
        addIncome(newTransaction);
      }
      else{
        addExpense(newTransaction)
      }
      setText("");
      setAmount("");

  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form >
        <div className='form-control'>
            <label htmlFor="text">Text</label>
            <input type="text" id='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter Text ... ' />
        </div>
        <div className='form-control'>
            <label htmlFor="amount">Amount</label>
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} name='amount' id="amount"
             placeholder='Enter Amount ... ' />
        </div>
        <div className="inc-btn" onClick={(e) => handleSubmit(e,"income")} >Add Income</div>
        <div className="exp-btn" onClick={(e) => handleSubmit(e,"expense")}>Add Expense</div>
      </form>
    </>
  )
}

export default AddTransaction
