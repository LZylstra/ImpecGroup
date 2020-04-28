import React, { Component } from "react";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../routes/LandingPage/LandingPage";
import Operations from "../../routes/Operations/Operations";
import ProjectManagement from "../../routes/ProjectManagement/ProjectManagement";
import StrategicPlanning from "../../routes/StrategicPlanning/StrategicPlanning";
import Sanitization from "../../routes/Sanitization/Sanitization";
import Staffing from "../../routes/Staffing/Staffing";
import WorkplaceTechnology from "../../routes/WorkplaceTechnology/WorkplaceTechnology";
import PageNotFound from "../../routes/PageNotFound/PageNotFound";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    return (
      <main className="App">
        <div className="App">
          <header className="App_header">
            <Header />
          </header>
          <main className="App_main">
            {this.state.hasError && <p className="red">There was an error!</p>}
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <Route exact path={"/operations"} component={Operations} />
              <Route
                exact
                path={"/project-management"}
                component={ProjectManagement}
              />
              <Route exact path={"/sanitization"} component={Sanitization} />
              <Route exact path={"/staffing"} component={Staffing} />
              <Route
                exact
                path={"/strategic-planning"}
                component={StrategicPlanning}
              />
              <Route
                exact
                path={"/workplace-technology"}
                component={WorkplaceTechnology}
              />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </div>
      </main>
    );
  }
}

export default App;
