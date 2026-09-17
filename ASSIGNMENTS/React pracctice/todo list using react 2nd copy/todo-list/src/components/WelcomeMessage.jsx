import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemsStore";

function WelcomeMessage() {
  const ContextObj = useContext(TodoItemContext);
  const TodoItems = ContextObj.oldState;

  return TodoItems.length === 0 && <h1>Enjoy your day</h1>;
}

export default WelcomeMessage;
