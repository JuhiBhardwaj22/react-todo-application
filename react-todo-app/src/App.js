import Todo from "../src/component/Todo";

function App() {
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
    </div>
  );
}

export default App;
