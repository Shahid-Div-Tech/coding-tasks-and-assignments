import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemsStore";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ DeleteItem }) => {
  //   console.log(todoItems)
  const contextObj = useContext(TodoItemContext);
  const todoItems = contextObj.oldState;

  return (
    <div className={style["items-container"]}>
      {todoItems.map((items, index) => {
        return (
          <TodoItem
            key={index}
            todoDate={items.DateValue}
            todoName={items.inputValue}
            DeleteItem={DeleteItem}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoItems;
