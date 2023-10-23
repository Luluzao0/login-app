import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import SuccessPage from './SuccessPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/success" component={SuccessPage} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
