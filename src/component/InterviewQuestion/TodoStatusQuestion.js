import React, { useMemo, useState } from "react";

const TodoStatusQuestion = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const hanldeChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      //setTodos((prev) => [...prev, { text: inputValue, completed: false }]);
      //also we can set like this way
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodo = [...todos];
    updatedTodo[index].completed = !updatedTodo[index].completed;
    setTodos(updatedTodo);
  };
  const filterTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (filter === "ALL") return true;
        if (filter === "ACTIVE") return !todo.completed;
        if (filter === "COMPLETED") return todo.completed;
      }),
    [filter, todos]
  );

  return (
    <div>
      <button onClick={() => setFilter("ALL")}>ALL</button>
      <button onClick={() => setFilter("ACTIVE")}>ACTIVE</button>
      <button onClick={() => setFilter("COMPLETED")}>COMPLETED</button>
      <div>
        <input
          placeholder="Enter Text here "
          value={inputValue}
          onChange={(e) => hanldeChange(e)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {filterTodos.map((todo, index) => (
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoStatusQuestion;
