import { useRef } from "react";
import style from "./AddTodo.module.css";
import { MdAddToQueue } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemsStore";

function AddTodo() {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const ContextObj = useContext(TodoItemContext);
  const AddItems = ContextObj.AddItem;

  return (
    <div className="container text-center">
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          const todoname = todoNameElement.current.value;
          const tododate = todoDateElement.current.value;
          todoDateElement.current.value = "";
          todoNameElement.current.value = "";
          AddItems(tododate, todoname);
        }}
      >
        <div className={` col-6`}>
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here "
          />
        </div>
        <div className="col-4">
          <input ref={todoDateElement} type="date" />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success ${style["kg-button"]} `}
          >
            <MdAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
