import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Transaction } from './Transaction'

const TransactionList = (props) => {
  const {  getTransactions } = useContext(GlobalContext) //transactions,

  useEffect(() => {
    getTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

// console.log(props);
//NOTE SHOULD BE filterItems
  let transactions = props.filterItems.map((transaction) => {
    return <Transaction
    transaction={transaction} key={transaction._id}
     />
  })

  return (
    <>
 <h3>History</h3>
      <div className="list-container">
        <ul className="list">
        {transactions}
         
        </ul>
      </div>



      {/* <h3>History</h3>
      <div className="list-container">
        <ul className="list">
          {transactions.map(transaction => ((
            <Transaction transaction={transaction} key={transaction._id} />
          )))}
        </ul>
      </div> */}
    </>
  )
}

export default TransactionList
