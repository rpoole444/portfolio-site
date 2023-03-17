import React from "react";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";

// import { Route}
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        {/* <img src={backgroundImage} /> */}
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;
