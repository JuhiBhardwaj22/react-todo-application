import { useState } from "react";

function ReactBatching() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Click Me !!</button>
    </>
  );
}
export default ReactBatching;
