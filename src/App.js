import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GithubContext } from './context/context';
import { Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
