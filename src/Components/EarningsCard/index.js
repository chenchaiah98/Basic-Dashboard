import { useCountUp } from "react-countup";

import earingImage from "../../images/earingImage.png";
import ordersImage from "../../images/ordersImage.png";
import balanceImage from "../../images/balanceImage.png";
import totalSalesImage from "../../images/totalSalesImage.png";

import "./index.css";

const Count = (value, name) => {
  useCountUp({ ref: name, end: value, delay: 1 });
  return <span id={name} />;
};

const overViewEaring = [
  {
    imageUrl: earingImage,
    name: "Earning",
    id: 1,
    amount: 198,
    Profit: 37,
  },
  {
    imageUrl: ordersImage,
    name: "orders",
    id: 2,
    amount: 2.4,
    Profit: 2,
  },
  {
    imageUrl: balanceImage,
    name: "Balance",
    id: 3,
    amount: 2.4,
    Profit: 2,
  },
  {
    imageUrl: totalSalesImage,
    name: "Total Sales",
    id: 4,
    amount: 89,
    Profit: 11,
  },
];

const EarningCard = () => (
  <div className="earing-main-container">
    {overViewEaring.map((eachIteam) => (
      <div className="earing-card-container" key={eachIteam.id}>
        <div className="light bg-green">
          <div className="earing-image-container">
            <img src={eachIteam.imageUrl} alt={eachIteam.name} />
          </div>
        </div>
        <div className="earning-text-container">
          <p className="earning-text-title">{eachIteam.name}</p>
          <p>
            <span>&#36;</span>
            {Count(eachIteam.amount, eachIteam.name)}K
          </p>
          <p className="profit-scale">
            <span>&#8593; {eachIteam.Profit} %</span> this month
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default EarningCard;
