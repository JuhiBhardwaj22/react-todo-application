import { useEffect, useState } from "react";
import Todo from "../src/component/Todo";
import ReactBatching from "./component/InterviewQuestion/ReactBatching";
import TodoExample from "./component/TodoExample";
import DummyApi from "./component/InterviewQuestion/DummyApi";

function App() {
  const [testAPI, setAPI] = useState();

  useEffect(() => {
    getAPIlist();
  }, []);

  const getAPIlist = async () => {
    const uri = "https://api.publicapis.org/entries";
    const data = await fetch(uri);
    const jsonData = await data.json();
    console.log("jsonData", jsonData);
  };
  return (
    <div className="App">
      {" "}
      <h1
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Todo Application
      </h1>
      <Todo />
      <ReactBatching />
      <TodoExample />
      <DummyApi />
    </div>
  );
}

export default App;
