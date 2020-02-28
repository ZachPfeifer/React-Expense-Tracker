import React from 'react'
import { Line } from "react-chartjs-2";
import "chartjs-plugin-lineheight-annotation";
import numeral from 'numeral'



export const LineChart = ({ text, amount }) => {

  // let amount = transaction.map(amount => transaction.amount)
  console.log(text, amount);

  const data = {
    labels: text,
    datasets: [
      {
        label: 'Transactions',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: amount
      }
    ]
  }

  return (
    <div>
      <Line
        data={data}
        width={1000}
        height={500}
        options={{
          title: {
            display: true,
            text: 'Spending Chart',
            fontSize: 25
          },
          responsive: true,
          legend: { display: true },
          maintainAspectRatio: false,
          responsiveAnimationDuration: 0,
          scales: {
            yAxes: [{
              ticks: {
                callback: function (value, index, values) {
                  // add comma as thousand separator
                  return '$ ' + numeral(value).format('0,0')
                },
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || ''

                if (label) {
                  label += ': '
                }
                label += numeral(tooltipItem.yLabel).format('0,0')
                return label
              },
            },
          },
        }}
      />
    </div>
  )
}
