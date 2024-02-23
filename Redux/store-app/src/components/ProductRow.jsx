import axios from "axios";
import React, { Component } from "react";

export class ProductRow extends Component {
  constructor() {
    super();
    this.deleteProductById = this.deleteProductById.bind(this);
  }

  deleteProductById() {
    axios
      .delete("http://localhost:3000/products/" + this.props.product.id)
      .then((response) => console.log(response.status))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <tr>
        <td>{this.props.product.id}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.location}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.deleteProductById}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
