import style from "./FoodInput.module.css";

const FoodInput = ({ handlekeydown }) => {
  return (
    <input
      type="text"
      placeholder="Buy other Thing"
      onKeyDown={handlekeydown}
    />
  );
};

export default FoodInput;
