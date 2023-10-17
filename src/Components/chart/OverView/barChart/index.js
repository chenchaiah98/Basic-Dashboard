import React, { Component } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";

import "./index.css";

class BarChartComponent extends Component {
  render() {
    const { data, activeBarChart, barChartValue, setActiveData } = this.props;

    const setChartData = (e) => {
      setActiveData(e.target.value);
    };

    return (
      <div className="BarChart-main-container ">
        <div className="Barchart-header">
          <div>
            <h3>Over View</h3>
          </div>
          <div>
            <select
              onChange={setChartData}
              style={{ outline: "none", width: "90px", padding: "4px" }}
            >
              {barChartValue.map((eachValue) => (
                <option value={eachValue.dataKey} key={eachValue.id}>
                  {eachValue.dataKey}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ResponsiveContainer>
          <BarChart
            width={50}
            height={10}
            data={data}
            margin={{ top: 30, left: 20, right: 20, bottom: 30 }}
          >
            <XAxis dataKey={activeBarChart} />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey={activeBarChart}
              fill="red"
              style={{
                cursor: "pointer",
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default BarChartComponent;
