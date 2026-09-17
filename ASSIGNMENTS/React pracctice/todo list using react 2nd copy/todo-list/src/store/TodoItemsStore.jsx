import { createContext } from "react";

const TodoItemContext = createContext({
  oldStae: [],
  AddItem: () => {},
  DeleteItem: () => {},
});

export { TodoItemContext };
