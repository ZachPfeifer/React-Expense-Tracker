import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      text,
      //NOTE +amount turns string amount into number ammount
      amount: +amount,
    }

    addTransaction(newTransaction)
  }


  return (
    <div className="form-group">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="Purchase">
          <label htmlFor="text">Purchase Name:</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter Purchase here..."
            required />
        </div>
        <div className="Amount">
          <label htmlFor="amount">
            Amount: <br />
            <small className="pl-3"> * - negative expense, + positive income*</small>
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            type="number"
            placeholder="Enter +Amount or -Amount..."
            required />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
