import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import uuid from 'uuid/v4'

//SECTION Dummy State
const intitialState = {
  transactions: [
    // { id: uuid(), text: 'Flower', amount: -20 },
    // { id: uuid(), text: 'Salary', amount: 300 },
    // { id: uuid(), text: 'Book', amount: -10 },
    // { id: uuid(), text: 'Camera', amount: 1500 },
  ]
}

//SECTION Context
export const GlobalContext = createContext(intitialState)

//SECTION Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intitialState)

  //SECTION Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  //SECTION Passing Children
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>)
}