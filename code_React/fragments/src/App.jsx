import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Sabzi", "Dal", "Ghee", "Papaya", "Carrot", "Roti"];

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // Alternate using array destructuring

  // let [textToShow, setTextState] = useState("Food Item Entered by user");
  // console.log(`Current value of textState: ${textToShow}`);

  // let [textToShow, setTextState] = useState();

  // let [foodItems, setfoodItems] = useState(["Sabzi", "Dal", "Ghee", "Papaya"]);

  // To Display Error component message , empty the array
  let [foodItems, setfoodItems] = useState([]); // states

  // states
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setfoodItems(newItems);
      // console.log("Food value entered is " + newFoodItem);
    }

    // console.log(event.target.value);
    // // textToShow = event.target.value;
    // setTextState(event.target.value);
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>

      {/* <FoodInput onChangeHandler={onChangeHandler} /> */}
      <FoodInput handleKeyDown={onKeyDown} />
      {/* {textToShow} */}
      <FoodItems items={foodItems} />
      <ErrorMessage items={foodItems} />
    </Container>
  );
}

export default App;
