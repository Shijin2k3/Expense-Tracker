import { createContext,useReducer } from "react";
import React  from "react";
import AppReducer from "./AppReducer";




const initialState ={
    expenses:[],
    incomes:[]

}

export const GlobalContext=createContext(initialState);

//provider component

export const GlobalProvider =({children}) =>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    //Actions

    function deleteIncome(id){
        dispatch({
            type:"DELETE_INCOME",
            payload:id
        })
    }
    function deleteExpense(id){
        dispatch({
            type:"DELETE_EXPENSE",
            payload:id
        })
    }
    function addIncome(income){
        dispatch({
            type:'ADD_INCOME',
            payload:income
        })
    }
    function addExpense(expense){
        dispatch({
            type:"ADD_EXPENSE",
            payload:expense
        })
    }


    return(
        <GlobalContext.Provider 
        value={{expenses:state.expenses,
        incomes:state.incomes
        ,deleteIncome,
        deleteExpense,addIncome
        ,addExpense}} >
            {children}
        </GlobalContext.Provider>
    )



}