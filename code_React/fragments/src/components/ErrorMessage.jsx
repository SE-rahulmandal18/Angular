// import FoodItems from "./FoodItems";

const ErrorMessage = ( {items} ) => {

  // insted of defining foodItems in ErrorMessage(children) & FoodItems(children) defined in App.js(parent)
  //  and pass foodItems as props to the children 

  return <>{items.length === 0 && <h3>I am still hungry</h3>}</>;
};

export default ErrorMessage;
