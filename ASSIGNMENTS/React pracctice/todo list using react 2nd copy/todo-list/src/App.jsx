import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import React, { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemContext } from "./store/TodoItemsStore";

const todoItemsReducer = (CurrentTodoItems, action) => {
  let NewTodoItems = CurrentTodoItems;
  if (action.type === "NEW_ITEM") {
    NewTodoItems = [
      ...CurrentTodoItems,
      {
        DateValue: action.payload.DateValue,
        inputValue: action.payload.inputValue,
      },
    ];
  } else if (action.type === "DElETE_ITEM") {
    NewTodoItems = CurrentTodoItems.filter(
      (item) => item.inputValue !== action.payload.todoItemName,
    );
  }
  return NewTodoItems;
};

function App() {
  // const [oldState, SetState] = useState([]);
  const [oldState, dispatchNewitems] = useReducer(todoItemsReducer, []);
  const DeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DElETE_ITEM",
      payload: {
        todoItemName,
      },
    };

    dispatchNewitems(deleteItemAction);
  };

  let AddItem = (DateValue, inputValue) => {
    if (DateValue === "" && inputValue === "") {
      return;
    }
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        inputValue,
        DateValue,
      },
    };

    dispatchNewitems(newItemAction);

    // SetState((oldState) => {
    //   return [...oldState, { DateValue, inputValue }];
    // });
  };

  return (
    <TodoItemContext.Provider
      value={{ oldState: oldState, AddItem: AddItem, DeleteItem: DeleteItem }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
