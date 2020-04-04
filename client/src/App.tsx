import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ReviewEdit from './pages/ReviewEdit';
import ReviewNew from './pages/ReviewNew';
import MediaShow from './pages/MediaShow';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/reviews/new" component={ReviewNew} />
    <Route exact path="/reviews/:id/edit" component={ReviewEdit} />
    <Route exact path="/medias/:id" component={MediaShow} />
  </Switch>
)

export default App
