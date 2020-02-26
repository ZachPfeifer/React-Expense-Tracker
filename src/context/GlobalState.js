import React, { createContext, useReducer } from 'react'

//Dummy State
const intitialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 1500 },
  ]
}

//Context
export const GlobalContext = createContext(intitialState)

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intitialState)

  return (<GlobalContext.Provider value={{ transactions: this.state.transactions }}>
    {children}
  </GlobalContext.Provider>)
}