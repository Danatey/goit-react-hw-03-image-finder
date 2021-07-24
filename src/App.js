import { Component } from "react";

import getAPI from "./Components/API";

class App extends Component {
  state = {};

  componentDidMount() {
    getAPI("cat", 1);
  }

  render() {
    return <div></div>;
  }
}

export default App;
