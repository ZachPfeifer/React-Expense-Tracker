import React from 'react'
import { Line } from "react-chartjs-2";


export const BarChart = ({ text, amount }) => {

  // let amount = transaction.map(amount => transaction.amount)
  console.log(text, amount);

  return (
    <div>
      <Line
        data={amount}
        width={100}
        height={50}
        options={{
          title: {
            display: true,
            text: 'Spending Chart',
            fontSize: 25
          },
          legend: {
            display: true,
            // text: 'Dollar Value'
          },
          // maintainAspectRatio: false,
          responsive: true
        }}
      />
    </div>
  )
}
