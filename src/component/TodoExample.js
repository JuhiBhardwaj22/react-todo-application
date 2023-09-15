import { useState } from "react";

const TodoExample = () => {
  const [text, setText] = useState("");
  const [todo, setTodoList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const handleTodo = () => {
    if (isUpdate) {
      //update value
      const updatedvalue = text;
      const updatedTodo = [...todo];
      updatedTodo[updateIndex] = updatedvalue;

      setTodoList(updatedTodo);
      setText("");
      setIsUpdate(false); // Reset the update mode
    } else {
      //add new item
      setTodoList((prev) => [...prev, text]);
      setText("");
    }
  };
  const handleUpdate = (item, index) => {
    setIsUpdate(true);
    setText(item);
    setUpdateIndex(index);
  };

  const handleDelete = (index) => {
    const newList = [...todo];

    newList.splice(index, 1);
    setTodoList(newList);
  };
  return (
    <div>
      <h1>Todo Example</h1>
      <input
        placeholder="enter text Here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTodo}>Click Here</button>
      {todo.map((item, index) => {
        return (
          <ul>
            <div style={{ display: "inline-flex" }}>
              <li key={index}>{item}</li>
              <button onClick={() => handleUpdate(item, index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default TodoExample;
