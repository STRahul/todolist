import { useState } from "react";
import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo);
  const { updateTodo } = useTodo();

  function handleEdit() {
    if (isTodoEditable) {
      updateTodo(todo.id, { ...todo, todo: todoMsg });
      setIsTodoEditable(false);
    }
    else
     setIsTodoEditable((prev) => !prev);
  }
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7]`}
    >
      <input type="checkbox" className="cursor-pointer" />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg border-transparent ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={todoMsg}
        onChange={(e)=>setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={handleEdit}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
