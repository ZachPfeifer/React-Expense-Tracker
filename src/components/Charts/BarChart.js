import React from 'react'
import { Bar } from "react-chartjs-2";


export const BarChart = ({ text, amount }) => {

  // let amount = transaction.map(amount => transaction.amount)
  console.log(text, amount);

  const data = {
    labels: [...text],
    datasets: [
      {
        label: 'Transactions ',
        backgroundColor: 'rgb(192,57,43)',
        borderColor: 'rgba(153,0,0,0.6)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [...amount]
      }
    ]
  };
  // let data = api.get("line-data");
  return (
    <div>
      <Bar
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
          // maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  )
}
