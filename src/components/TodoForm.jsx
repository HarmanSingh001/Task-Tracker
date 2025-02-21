import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Your Tasks..."
        className="w-full border border-[#4A5568] rounded-l-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#6366F1] bg-[#2D3748] text-[#E2E8F0] placeholder-gray-400 transition-all duration-200"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-6 py-2 bg-[#6366F1] text-white font-semibold hover:bg-[#4F46E5] transition-all duration-200"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
