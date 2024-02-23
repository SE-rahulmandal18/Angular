import React, { Component } from "react";

export class ProductRow extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr>
        <td>{this.props.product.id}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.location}</td>
      </tr>
    );
  }
}

export default ProductRow;
