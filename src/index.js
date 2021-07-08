import React from 'react';
import ReactDOM from 'react-dom';
import {TopAlbum} from './topAlbum';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import TopSong from './topSong';
import Home from './home'
import Error from './error'
import NavBar from './navBar'



ReactDOM.render(
  <React.StrictMode>
     
    <Router>
    <NavBar />
      <Switch> 
          <Route exact path='/MusicApp'> 
             <Home />
          </Route>
          
          <Route exact path='/MusicApp/TopAlbum'> 
              <TopAlbum />
          </Route > 
          <Route exact path='/MusicApp/TopSong'> 
              <TopSong />
          </Route>
          <Route exact path='*'> 
              <Error />
          </Route>
     </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
