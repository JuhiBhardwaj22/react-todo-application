import { useEffect, useState } from "react";

const ReactFunctionCompLifeCycle = () => {
  const [count, setCount] = useState(0);

  console.log("Initial Render");

  //componentDidMount Equivalent:

  //This method is called after the component is mounted and rendered for the first time.
  //You can use useEffect with an empty dependency array to achieve this behavior,
  //ensuring that the effect runs only once after the initial render.

  useEffect(() => {
    console.log("useEffect with Empty dependency");
  }, []); // Empty dependency array means this effect runs only once after the initial render

  //componentDidUpdate Equivalent:

  //This method is called after the component is updated (re-rendered), but not on the initial render.
  //You can achieve this behavior by including specific dependencies in the dependency array of useEffect,
  //triggering the effect only when those dependencies change.

  useEffect(() => {
    // This code runs after every render, including the initial render
    console.log("Component updated");

    // If you want to perform an action only on updates and not on mount,
    // you can check if the count has changed
    if (count !== 0) {
      console.log("Component did update", count); // Your componentDidUpdate logic here
    }
  }, [count]);

  //ComponentWillUnmount Equivalent:

  //This method is called just before the component is unmounted and destroyed.
  //You can achieve this behavior by returning a cleanup function from the useEffect hook.

  //When you click the count button, the component updates. The useEffect hook runs again.
  //Before the new effect runs, React cleans up the previous effect (because it's being replaced by a new one). This cleanup involves executing the cleanup function from the previous effect. Hence, "Component unmounted" is logged.
  //After the cleanup, the new effect runs, logging "Component mounted" again.
  useEffect(() => {
    console.log("Component Mount");
    // Cleanup function (optional)
    return () => console.log("Cleanup Unmount component inside useEffect");
  }, []);

  useEffect(() => {
    console.log("useEffect without dependency");
  });

  //shouldComponentUpdate Equivalent: useMemo(())
  //In functional components, you can use the React.memo higher-order component or the useMemo hook
  //to optimize re-renders based on props or state changes.

  //componentDidCatch Equivalent : Error Boundary

  //This method is used to catch JavaScript errors in components.
  // In functional components, you can use the ErrorBoundary component or wrap the component
  //in a try-catch block to achieve similar error-handling behavior.

  return (
    <div>
      {console.log("Return method")}
      <h5>React LifeCycle -{count}</h5>
      <button onClick={() => setCount((prev) => prev + 1)}> Click Me</button>
    </div>
  );
};

export default ReactFunctionCompLifeCycle;
