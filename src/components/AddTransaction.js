import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import uuid from 'uuid/v4'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      id: uuid(),
      text,
      //NOTE +amount turns string amount into number ammount
      amount: +amount,
    }

    addTransaction(newTransaction)
  }


  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter Text here..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            type="number"
            placeholder="Enter Amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
