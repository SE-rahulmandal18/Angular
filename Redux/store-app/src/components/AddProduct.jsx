import React, { Component } from "react";
import axios from "axios";

export class AddProduct extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      name: "",
      price: "",
      location: "",
    };

    // Binding methods
    this.changeId = this.changeId.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.addProduct = this.addProduct.bind(this);

    // Creating a ref for the form
    this.addProductForm = React.createRef();
  }

  changeId(event) {
    this.setState({ id: event.target.value });
  }

  changeName(event) {
    this.setState({ name: event.target.value });
  }

  changePrice(event) {
    this.setState({ price: event.target.value });
  }

  changeLocation(event) {
    this.setState({ location: event.target.value });
  }

  addProduct(event) {
    event.preventDefault();
    let data = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      location: this.state.location,
    };

    axios
      .get("http://localhost:3000/products", data)
      .then((response) => {
        console.log(response.status);
        // Resetting the form
        this.addProductForm.current.reset();
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <form onSubmit={this.addProduct} ref={this.addProductForm}>
        <div className="form-group">
          <label>Enter the ID:</label>
          <input
            type="text"
            name="id"
            onChange={this.changeId}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Enter the Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.changeName}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Enter the Price:</label>
          <input
            type="text"
            name="price"
            onChange={this.changePrice}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Enter the Location:</label>
          <input
            type="text"
            name="location"
            onChange={this.changeLocation}
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </div>
      </form>
    );
  }
}

export default AddProduct;
