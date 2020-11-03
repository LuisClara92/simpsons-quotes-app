import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Quotes from './components/Quotes'


function App() {
  return (
    <div className="App">
      <Link to="/">Quotes</Link>
      <Switch>
        <Route exact path="/" component={Quotes} />
      </Switch>
    </div>
  );
}

export default App;
