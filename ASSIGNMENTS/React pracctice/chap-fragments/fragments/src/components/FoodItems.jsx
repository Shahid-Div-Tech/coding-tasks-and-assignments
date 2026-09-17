import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [old, current] = useState([]);

  return (
    <ul className="list-group">
      {items.map((items) => (
        <Item
          key={items}
          foodItems={items}
          bought={old.includes(items)}
          handleBuyButtonClicked={(e) => {
            let currentitems = [...old, items];
            current(currentitems);
            console.log("you buy this " + items);
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
