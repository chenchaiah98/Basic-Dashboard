// import "./index.css";

// const PieChart = () => (
//   <div className="PieChart-main-container">
//     <h3>PieChart Over View</h3>
//   </div>
// );
// export default PieChart;

import React, { Component } from "react";
import { ResponsiveContainer, Pie, PieChart, Tooltip } from "recharts";

import "./index.css";

class PieChartComponent extends Component {
  render() {
    const { data, activeBarChart } = this.props;

    return (
      <div className="PieChart-main-container">
        <ResponsiveContainer>
          <PieChart width={100} height={100}>
            <Pie
              data={data}
              dataKey={activeBarChart}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default PieChartComponent;
