import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { BarChart } from './BarChart';



const Chart = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)

  let amounts = transactions.map(transaction => transaction.amount)
  let text = transactions.map(transaction => transaction.text)
  console.log(transactions, text, amounts);

  useEffect(() => {
    getTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Hello from charts</h1>
      <BarChart text={text} amount={amounts} />

    </div>
  )
}

export default Chart

