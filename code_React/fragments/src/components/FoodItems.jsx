import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} 
        handleBuyButtonClicked={() => console.log(`${item} bought`)}
        /> // Item component
      ))}
    </ul>
  );
};

export default FoodItems;
