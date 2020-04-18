import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ReviewEdit from './pages/ReviewEdit';
import ReviewNew from './pages/ReviewNew';
import MediaShow from './pages/MediaShow';
import Login from './pages/Login';
import { User } from './graphql'


const App = () => {
  const [user, setUser] = useState({id: '0', name: ''});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user`, {
      credentials: "include",
    })
    .then(res => console.log(res.json()))

  });

  return(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/reviews/new" render={props => 
    <ReviewNew user={user} routeProps={props}/>} />
    <Route exact path="/medias/:mediaId/reviews/:reviewId/edit" component={ReviewEdit} />
    <Route exact path="/medias/:id" component={MediaShow} />
  </Switch>
  )
}

export default App
