import { createStore } from "redux";
import productReducer from "../reducer/productReducer";


let productStore = createStore(productReducer);

export default productStore;
