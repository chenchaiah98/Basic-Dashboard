import { Component } from "react";
import SideBar from "../SideBar";

import "./index.css";
import Header from "../Headder";
import EarningCard from "../EarningsCard";
import Chart from "../chart";
import ProductSell from "../productSell";

class Home extends Component {
  render() {
    return (
      <div className="main-app-home">
        <SideBar />
        <div className="bg-home-container">
          <Header />
          <EarningCard />
          <Chart />
          <ProductSell />
        </div>
      </div>
    );
  }
}

export default Home;
