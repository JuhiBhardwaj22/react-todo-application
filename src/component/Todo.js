import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";
import EditIcon from "@mui/icons-material/Edit";
import "./index.css";
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [displayTodo, setDisplayTodo] = useState([]);
  const [todoId, setTodoId] = useState(null);
  const [emptyTodo, setEmptyTodo] = useState(false);

  const handleTodo = (e) => {
    const todoValue = e.target.value;
    setTodo(todoValue);
  };
  const addTodo = () => {
    if (todo) {
      //This condition for update the todo value
      if (todoId) {
        const updatedList = displayTodo.map((item, index) =>
          index === todoId ? todo : item
        );
        setDisplayTodo(updatedList);
      } else {
        //This consition will add new value
        setDisplayTodo((prev) => [...prev, todo]);
      }
      setTodo("");
      setTodoId(null);
    } else {
      setEmptyTodo(true);
    }
  };
  const removeTodo = (id) => {
    displayTodo.splice(id, 1);
    setDisplayTodo((prev) => [...prev]);
  };
  const upadteTodo = (elm, id) => {
    setTodo(elm);
    setTodoId(id);
  };
  return (
    <>
      <div className="todo_app">
        <TextField
          id="outlined-basic"
          label="Add_Todo"
          variant="outlined"
          value={todo}
          onChange={(e) => handleTodo(e)}
        />
        <div className="add-button">
          <Button variant="contained" size="large" onClick={() => addTodo()}>
            Add Todo
          </Button>
        </div>
      </div>
      <div className="add_list">
        <ul className="list-ul">
          {displayTodo.map((elm, index) => {
            return (
              <div>
                <li key={index} className="list_item">
                  {elm}
                  <div className="icon">
                    <DeleteIcon
                      color="primary"
                      onClick={() => removeTodo(index)}
                    />
                    <EditIcon
                      color="success"
                      onClick={() => upadteTodo(elm, index)}
                    />
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      {emptyTodo && (
        <Alert
          severity="info"
          onClose={() => {
            setEmptyTodo(false);
          }}
        >
          This is an info alert — Please type..
        </Alert>
      )}
    </>
  );
}

export default Todo;
