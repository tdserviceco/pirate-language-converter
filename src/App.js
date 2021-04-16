import React from 'react';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {


  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App;