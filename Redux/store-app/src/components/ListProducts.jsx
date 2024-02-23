import React, { Component } from "react";
import axios from "axios";
import ProductRow from "./ProductRow";

export class ListProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>LOCATION</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product, index) => (
            <ProductRow product={product} key={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ListProducts;
