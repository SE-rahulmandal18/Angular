function productReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      state = state.concat(action.product);
    case "DELETE_PRODUCT":
      state = state.filter((product) => product.id !== action.id);
    case "FETCH_PRODUCT":
      return action.products;
    default:
      return state;
  }
}

export default productReducer;
