import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} /> // Item component
      ))}
    </ul>
  );
};

export default FoodItems;
