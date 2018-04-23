import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSongsActionCreator } from '../actions/action-creators';
import { createPlaylistActionCreator } from '../actions/action-creators';

class CreatePLayList extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.CreatePLayList = this.CreatePLayList.bind(this);

    this.state = {
      artist:""
    }
  }

    handleChange({ target }) {
      this.setState({
        [target.id]: target.value
      });
    }

  CreatePLayList(e) {
    e.preventDefault();
   const { artist, id } = this.state;
   console.log(this.props)

   let artist_songs = this.props.songs[0].songs;
   let _this = this;

    var result = artist_songs.filter(function( obj ) {
        return obj.artist.toLowerCase() == _this.state.artist.toLowerCase();
    });
    console.log('result', result);
    if(result.length){
        this.props.playlistReducer(result, artist);
        this.setState({ artist: ''})
    }
      this.setState({ artist: ''})
  }

  render(){
    const { artist } = this.state;
    return(
      <form onSubmit={this.CreatePLayList}>
      <div className="form-group">
        <label>Create PLaylist</label>
        <input
          type="text"
          id="artist"
          className="form-control"
          value={artist}
          onChange={this.handleChange}
          required
        />
        </div>
        <button className="btn btn-primary">
          Create
        </button>
      </form>
    )
  }
}

function mapStateToProps(songs) {
    return songs;
    console.log(songs)
}

function mapDispatchToProps(dispatch) {
  return {
    playlistReducer(playlists, artist) {
      const action = createPlaylistActionCreator(playlists, artist);

      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePLayList);;
