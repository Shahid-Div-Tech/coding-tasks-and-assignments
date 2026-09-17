import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [
  //   "sabzi",
  //   "Green Vegetable",
  //   " milk",
  //   " Yougart",
  //   "home made food",
  // ];
  // let foodItems=[]

  // let [texttoshow, setTextState] = useState("entered by user");
  let [foodItems, setFoodItems] = useState([]);

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>

        <FoodInput
          handlekeydown={(e) => {
            if (e.key === "Enter") {
              let newFoodItem = event.target.value;
              let newItem = [...foodItems, newFoodItem];
              setFoodItems(newItem);
            }
          }}
        ></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>this food is healty for your healthy life style</p>
      </Container> */}
    </>
  );
}

export default App;
