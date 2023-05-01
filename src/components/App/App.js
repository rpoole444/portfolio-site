import React from "react";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import LandingPage from "../LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route
            path="/main-page"
            render={() => {
              return;
              <>
                <Header />
                <Homepage />
              </>;
            }}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
