import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
//SECTION Dummy State
const intitialState = {
  transactions: [],
  error: null,
  loading: true
}

//SECTION Context
export const GlobalContext = createContext(intitialState)

//SECTION Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intitialState)


  //SECTION API CAllS
  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions');

      // @ts-ignore
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (error) {
      // @ts-ignore
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: error.response.data.error,
      });
    }
  }

  //SECTION Actions (dispatch to the Reducer)
  async function deleteTransaction(id) {

    try {
      await axios.delete(`/api/v1/transactions/${id}`)
      // @ts-ignore
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (error) {
      // @ts-ignore
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: error.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/v1/transactions', transaction, config)
      // @ts-ignore
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (error) {
      // @ts-ignore
      dispatch({
        type: 'TRANSACTIONS_ERROR',
        payload: error.response.data.error,
      });
    }
  }

  //SECTION Passing Children
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>)
}