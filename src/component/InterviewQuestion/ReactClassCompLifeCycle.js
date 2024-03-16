import React, { Component } from "react";

class ReactClassCompLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      msg: "Hello there",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //This static method is used to update the state of a component based on changes in props before rendering.
  //In functional components, you can achieve similar behavior by using the useState hook and useEffect
  //hook to update the state when props change.

  //   static getDerivedStateFromProps(props, state) {
  //     if (props.count !== state.count) {
  //       console.log("state", state, props);
  //       return {
  //         count: props.count,
  //       };
  //     }
  //   }

  componentDidMount() {
    console.log("***********Class componentDidMount**********");
  }
  shouldComponentUpdate(prevProps, prevState) {
    console.log("prevState", prevState);
    return true;
  }
  componentDidUpdate() {
    console.log("***********Class componentDidUpdate**********");
  }
  componentDidCatch(error, info) {
    console.log("error", error);
  }
  handleClick = () => {
    console.log("this", this);
    //this.setState({ count: this.state.count + 1 });

    this.setState((prev) => {
      return { count: this.state.count + 1 };
    });
  };
  render() {
    return (
      <div>
        {console.log("class intial render")}
        <h3>Class Component{this.state.count}</h3>

        <button onClick={this.handleClick}>Class Click Me</button>
      </div>
    );
  }
}

export default ReactClassCompLifeCycle;
