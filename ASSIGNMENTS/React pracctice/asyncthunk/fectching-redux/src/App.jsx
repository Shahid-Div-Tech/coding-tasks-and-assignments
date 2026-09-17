import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "./redux/features/todo";
import { deleteTodo } from "./redux/features/todo";

function App() {
  const dispatch = useDispatch();

  const { todo, loding, error } = useSelector((state) => state.todo);

  console.log(todo);

  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  if (loding) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  function itemDelete(id) {
    dispatch(deleteTodo(id));
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
          My Todo List
        </h1>

        {/* Input */}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 rounded-xl">
            Add
          </button>
        </div>

        {/* Todos */}
        <div className="space-y-4">
          {todo?.todos.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl p-4 shadow-sm transition"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={item.completed}
                  readOnly
                  className="w-5 h-5 accent-blue-600"
                />

                <h2
                  className={`text-lg font-semibold ${
                    item.completed
                      ? "line-through text-gray-400"
                      : "text-slate-800"
                  }`}
                >
                  {item.todo}
                </h2>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white rounded-xl">
                  Edit
                </button>

                <button
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl"
                  onClick={() => {
                    itemDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
