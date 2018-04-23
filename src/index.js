import './main.scss';
import "babel-polyfill";
import "whatwg-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import Header from './js/common/Header';
import Sidebar from './js/common/Sidebar';
import Home from './js/common/Home';
import SearchSongs from './js/common/SearchSongs';
import SearchSongsView from './js/common/SearchSongsView';
import songsReducer from './js/reducers/songs-reducer';
import SearchReducer from './js/reducers/search-reducer';
import playlistReducer from './js/reducers/playlist-reducer';

const AppState = {
  /* Reducers and state go here */
  songs:songsReducer,
  search:SearchReducer,
  playlists: playlistReducer
};

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers(AppState),applyMiddleware(middleware));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>


            <Main />

      
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
