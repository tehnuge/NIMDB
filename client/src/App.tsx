import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ReviewEdit from './pages/ReviewEdit';
import ReviewNew from './pages/ReviewNew';
import MediaShow from './pages/MediaShow';
import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState({ id: '', name: '', googleId: '' });

  useEffect(() => {
    fetch(`/user`, {
      credentials: 'include',
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        setUser(res);
      })
  }, []);

  return (
    <Switch>
      <Route exact path="/" render={props =>
        <Home user={user} routeProps={props} />} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reviews/new" render={props =>
        <ReviewNew user={user} routeProps={props} />} />
      <Route exact path="/medias/:mediaId/reviews/:reviewId/edit" component={ReviewEdit} />
      <Route exact path="/medias/:id" render={props =>
        <MediaShow user={user} routeProps={props} /> }/>
    </Switch>
  )
}

export default App;
