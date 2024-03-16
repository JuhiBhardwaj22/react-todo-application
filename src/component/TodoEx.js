import { useState } from "react";

const TodoEx = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoID, setTodoID] = useState("");

  const hanldeChange = (e) => {
    const value = e.target.value;
    setText(value);
  };
  const addTodo = () => {
    if (todoID) {
      const updateTodo = todos;
      updateTodo[todoID] = text;
      setTodos(updateTodo);
      setText("");
    } else {
      setTodos((prev) => [...prev, text]);
      setText("");
    }
  };
  const handleDelete = (key) => {
    const todoList = [...todos];
    todoList.splice(key, 1);
    setTodos(todoList);
  };
  const hanldeEdit = (elm, id) => {
    setText(elm);
    setTodoID(id);
  };

  return (
    <div>
      Todo List
      <div>
        <input
          placeholder="Enter Text here "
          value={text}
          onChange={(e) => hanldeChange(e)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <br /> <br />
      {todos.map((item, index) => {
        return (
          <ul>
            <li key={index}>
              {item}{" "}
              <button onClick={() => hanldeEdit(item, index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>
                Delete-{index}
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default TodoEx;
