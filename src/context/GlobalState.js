import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
  searchItems: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get('https://zachs-global-server.herokuapp.com/api/v1/transactions');
      // @ts-ignore
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (err) {
      // @ts-ignore
      dispatch({
        type: 'TRANSACTION_ERROR',
        // payload: err.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`https://zachs-global-server.herokuapp.com/api/v1/transactions/${id}`);
      // @ts-ignore
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (err) {
      // @ts-ignore
      dispatch({
        type: 'TRANSACTION_ERROR',
        // payload: err.response.data.error
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
      const res = await axios.post('https://zachs-global-server.herokuapp.com/api/v1/transactions', transaction, config);

      // @ts-ignore
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (err) {
      // @ts-ignore
      dispatch({
        type: 'TRANSACTION_ERROR',
        // payload: err.response.data.error
      });
    }
  }






  //SECTION Handle for search Input
//  const handleInput = (e) => {
//     e.preventDefault();
//     initialState.searchItems = e.target.value
//     console.log(initialState.searchItems);
//   }
const handleInput = (e) => {
  e.preventDefault();
  debugger
    dispatch({
      type: 'FILTER_TRANSACTIONS',
      payload:  state.transactions.text = e.target.value,
    })
}

  return (
  <GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteTransaction,
    addTransaction,

    searchItem: state.searchItem,
    handleInput,
  }}>
    {children}
  </GlobalContext.Provider>);
}