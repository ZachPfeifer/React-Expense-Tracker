import React from 'react'
import { Bar } from "react-chartjs-2";


export const BarChart = ({ text, amount, changeColor }) => {

  // let amount = transaction.map(amount => transaction.amount)
  console.log(text, amount);

  //FIXME Construction (Figuring out how to change graph color based on amount value)


  const data = {
    labels: [...text],
    datasets: [
      {
        label: 'Transactions ',
        backgroundColor: changeColor,
        borderColor: ['rgba(255,99,132,0.4)'],
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
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
    </div>
  )
}
