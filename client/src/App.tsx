import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ReviewEdit from './pages/ReviewEdit';
import ReviewNew from './pages/ReviewNew';
import MediaShow from './pages/MediaShow';
import Login from './pages/Login';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/reviews/new" component={ReviewNew} />
    <Route exact path="/medias/:mediaId/reviews/:reviewId/edit" component={ReviewEdit} />
    <Route exact path="/medias/:id" component={MediaShow} />
  </Switch>
)

export default App
