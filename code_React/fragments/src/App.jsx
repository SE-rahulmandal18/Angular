// import FoodItems from "./components/FoodItems";
// import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
// import Container from "./components/Container";

function App() {
  let foodItems = ["Sabzi", "Dal", "Ghee", "Papaya", "Carrot", "Roti"];

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
    
      <FoodInput/>

      <FoodItems items={foodItems} />
      <ErrorMessage items={foodItems} />
    </Container>

    // <Container>
    //   <h1 className="food-heading">Healthy Food</h1>
    //   {/* <FoodInput handleKeyDown={onKeyDown}></FoodInput> */}
    //   <ErrorMessage items={foodItems}></ErrorMessage>
    //   <FoodItems items={foodItems}></FoodItems>
    // </Container>
  );
}

export default App;
