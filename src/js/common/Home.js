import React from 'react';
import {getSongs} from '../services/LoadSongs';
import songs from '../data/songs';
import {Song} from './Song';
import { connect } from 'react-redux';
import { loadSongsActionCreator } from '../actions/action-creators';
import Main from '../../Main';

var data = require('../data/songs.js');

class  Home extends React.Component {
  constructor(props){
    super(props);

    this.Sort = this.Sort.bind(this);

    this.state = {
      songs:[],
    }
  }

  Sort(rank) {
    const myData = [].concat(this.state.songs)
      .sort((a, b) => a.rank > b.rank);
      this.setState({
        songs: myData
      });
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({songs : data.default})
  //  this.props.songsReducer(data.default);
  }

  render(){
    return(
      <div>
      <div className="col-12">
        <button onClick={this.Sort} className="btn btn-primary">Top Songs first</button>
      </div>
      <hr/>
      <h1 className="col-12">Songs:</h1>

      {
      this.state.songs.map(song =>
          <Song
              key={song.id}
              image={song.image}
              title={song.title}
              artist={song.artist}
          />
          )
      }
      </div>
    )
  }
}

function mapStateToProps(songs) {
    return songs;
}
export default connect(mapStateToProps, null)(Home)
