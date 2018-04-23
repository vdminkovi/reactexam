import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {getSongs} from './js/services/LoadSongs';
import songs from './js/data/songs';

import { loadSongsActionCreator } from './js/actions/action-creators';
import Header from './js/common/Header';
import Sidebar from './js/common/Sidebar';
import Home from './js/common/Home';
import SearchSongs from './js/common/SearchSongs';
import SearchSongsView from './js/common/SearchSongsView';

var data = require('./js/data/songs.js');
const history = createHistory();

class  Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      songs:[],
    }
  }

  componentDidMount() {
    this.props.songsReducer(data.default);
  }

  render(){
    return(
        <ConnectedRouter history={history}>
            <div>
              <Header />
                <div className="row no-gutters main-content-wrapper">
                    <div className="col-3">
                      <Sidebar />
                    </div>
                    <div className="col-9">
                        <Route path="/" component={Home} exact/>
                        <Route path="/search" component={SearchSongs}/>
                        <Route path="/search-view" component={SearchSongsView}/>
                    </div>
                </div>
              </div>
          </ConnectedRouter>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    songsReducer(allSongs) {
      const action = loadSongsActionCreator(allSongs);
      dispatch(action);
    }
  };
}
export default connect(null, mapDispatchToProps)(Main)
