import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ResumeBuilder from "./modules/resume-builder";
import './assets/styles/App.scss';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
              <Switch>
                  <Route exact path="/" component={ResumeBuilder} />
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
