import React from 'react'
import { Line } from "react-chartjs-2";
import "chartjs-plugin-lineheight-annotation";


export const LineChart = ({ text, amount }) => {

  // let amount = transaction.map(amount => transaction.amount)
  console.log(text, amount);

  const data = {
    labels: [...text],
    datasets: [
      {
        label: 'Transactions',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [...amount]
      }
    ]
  }

  return (
    <div>
      <Line
        data={data}
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
          },
          responsive: true,

        }}
      />
    </div>
  )
}
