import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-[#4A5568] rounded-lg px-4 py-3 gap-x-4 shadow-sm transition-all duration-200 ${
        todo.completed ? "bg-[#3A4556]" : "bg-[#2D3748]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5 accent-[#6366F1]"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`w-full bg-transparent outline-none text-[#E2E8F0] ${
          isTodoEditable ? "border-b border-[#6366F1]" : "border-transparent"
        } ${todo.completed ? "line-through opacity-75" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="p-2 rounded-lg hover:bg-[#4A5568] transition-all duration-200"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) editTodo();
          else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>
      <button
        className="p-2 rounded-lg hover:bg-[#EF4444] transition-all duration-200"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
