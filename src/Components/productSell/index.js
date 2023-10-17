import { Component } from "react";
import data from "../../jsonData/ProductData.json";

import "./index.css";

class ProductSell extends Component {
  render() {
    return (
      <div className="main-product-sell-container ">
        <h3>ProductSell</h3>
        <div className="product-table-container text-grey">
          <div>
            <p>product Name</p>
          </div>
          <div className="product-stock-details-container">
            <div>
              <p>stock</p>
            </div>
            <div>
              <p>Price</p>
            </div>
            <div>
              <p>Totel sales</p>
            </div>
          </div>
        </div>
        <hr />

        {data.map((e) => (
          <div className="product-table-container" key={e.id}>
            <div className="product-container">
              <div className="product-image-container">
                <img src={e.productImage} alt={e.product} />
              </div>
              <div>
                <p>{e.product}</p>
              </div>
            </div>
            <div className="product-stock-details-container">
              <div>
                <p>{`${e.stock} in stock`}</p>
              </div>
              <div>
                <p>{e.price}</p>
              </div>
              <div>
                <p>{e.stock - e.sales}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductSell;
