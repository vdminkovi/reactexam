import React from 'react';
import { Link } from 'react-router-dom';
import CreatePLayList from './CreatePLayList'
import Playlists from './Playlists'
import { connect } from 'react-redux';
import { loadSongsActionCreator } from '../actions/action-creators';
import { createPlaylistActionCreator } from '../actions/action-creators';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    return (
      <aside className="site-sidebar">
        <nav className="side-nav">
          <ul>
            <li><CreatePLayList/></li>
          </ul>
        </nav>

        <hr />

        <h4>Your Playlists:</h4>
        <Playlists />
      </aside>
    );
  }

}

function mapStateToProps(songs) {
    return songs;
}

export default connect(mapStateToProps)(Sidebar);
