import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ReviewEdit from './pages/ReviewEdit';
import ReviewNew from './pages/ReviewNew';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/edit/new" component={ReviewNew} />
    <Route exact path="/edit/:id" component={ReviewEdit} />

  </Switch>
)

export default App
