import { Component } from "react";

import getAPI from "./Components/API";
import Searchbar from "./Components/Searchbar";

class App extends Component {
  state = {};

  componentDidMount() {
    getAPI("cat", 1);
  }

  render() {
    return (
      <div className="app-container">
        <Searchbar onSubmit />
      </div>
    );
  }
}

export default App;
