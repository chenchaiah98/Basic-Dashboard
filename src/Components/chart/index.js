import { Component } from "react";
import BarChartComponent from "./OverView/barChart";
import PieChart from "./OverView/pieChart";

import "./index.css";

const data = [
  {
    name: "Page A",
    uv: 10000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const barChartValue = [
  { id: "uv", dataKey: "uv" },
  { id: "pv", dataKey: "pv" },
  { id: "amt", dataKey: "amt" },
];

class Chart extends Component {
  state = { activeBarChart: barChartValue[0].dataKey };

  componentDidMount() {
    this.setState({ activeBarChart: barChartValue[0].dataKey });
  }

  setActiveData = (id) => {
    this.setState({ activeBarChart: id });
  };

  changeColor = (e) => {
    console.log(e.target);
  };

  render() {
    const { activeBarChart } = this.state;
    return (
      <div className="chart-section-container">
        <BarChartComponent
          data={data}
          changeColor={this.changeColor}
          setActiveData={this.setActiveData}
          barChartValue={barChartValue}
          activeBarChart={activeBarChart}
        />
        <PieChart data={data} activeBarChart={activeBarChart} />
      </div>
    );
  }
}

export default Chart;
