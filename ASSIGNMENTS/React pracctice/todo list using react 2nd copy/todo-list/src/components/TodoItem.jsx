import style from "./TodoItem.module.css";
import { MdAutoDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemsStore";

function TodoItem({ todoName, todoDate }) {
  const ContextObj = useContext(TodoItemContext);
  const DeleteItem = ContextObj.DeleteItem;
  return (
    <div className="container ">
      <div className={`row ${style["kg-row"]}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger ${style["kg-button"]}`}
            onClick={() => {
              DeleteItem(todoName);
            }}
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
