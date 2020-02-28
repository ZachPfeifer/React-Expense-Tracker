import React, { Component } from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2'

export default class AllCharts extends Component {



  constructor(props) {
    super(props)
    this.state = {
      data: {
        labels: ['Money Chart'],
        datasets: [
          {
            label: "Money Spent",
            backgroundColor: "rgba(255, 0, 255, 0.75)",
            data: [40, 5, 1, 10, 32]
          },
          {
            label: "Money Earned",
            backgroundColor: "rgba(0, 255, 255, 0.75)",
            data: [20, 15, 11, 10, 32]
          }
        ]
      }
    }
  }


  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext('2d')
    console.log(ctx);
    const gradient = ctx.createLinearGradient(0, 0, 600, 550)
    gradient.addColorStop(0, color)
    gradient.addColorStop(0.95, "rgba(133,122,144,0.5")
    return gradient
  }


  getChartData = canvas => {
    const data = this.state.data
    if (data.datasets) {
      let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 255, 0.75)"]
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = "white";
        set.borderWidth = 2;

      })
    }

    return data
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <Bar
            options={{ responsive: true }}
            data={this.getChartData}
          />
        </div>
        <div className="col-6">

          <Line
            options={{ responsive: true }}
            data={this.getChartData}
          />
        </div>
        <div className="col-6">
          <Pie
            options={{ responsive: true }}
            data={this.getChartData}
          />
        </div>

      </div>
    )
  }
}
