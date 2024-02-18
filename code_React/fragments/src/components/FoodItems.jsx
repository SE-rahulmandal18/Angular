import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  // bought={true} -> for implementing code for ac
  let [activeItems, setActiveItems] = useState([]);

  let onByButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          // bought={true}
          bought={activeItems.includes(item)}
          // handleBuyButtonClicked={() => console.log(`${item} bought`)}
          handleBuyButtonClicked={(event) => onByButton(item, event)}
        /> // Item component
      ))}
    </ul>
  );
};

export default FoodItems;
