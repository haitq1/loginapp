import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './containers/Login';
import PrivateRoute from './Route/route';
import HomePage from './containers/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/login" exact component={LoginPage}></Route>
            <PrivateRoute path="/" exact component={HomePage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
