import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SearchSongsActionCreator } from '../actions/action-creators';
import SearchSongsView from './SearchSongsView'

var data = require('../data/songs.js');

class SongsSearchEngine extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.displayResults = this.displayResults.bind(this);

    this.state = {
      song: [],
      found: true
    };
  }
  componentDidMount(){
      console.log(this.props);
  }
  handleChange({ target }) {
    this.setState({
      [target.id]: target.value
    });
  }

  displayResults(e) {
    e.preventDefault();
    const { artist, title  } = this.state;

    var result = data.default.filter(function( obj, i) {
        return (obj.artist.toLowerCase()  == artist.toLowerCase()  && obj.title.toLowerCase()  == title.toLowerCase() )
    });
    if(result.length){
      this.props.SearchReducer(result);
      this.setState({
        artist :'',
        title : ''
      })
    //  this.setState({ song:result, found: true });
  }else {
    this.setState({
      found :false,
    })
  }
    this.setState({
      artist :'',
      title : ''
    })
  }

  render() {
    const { songs, artist, title } = this.state;

    return (
      <section className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.displayResults}>
              <div className="form-group">
              <label>Artist:</label>
                <input className="form-control"
                  type="text"
                  id="artist"
                  ref="Artist"
                  value={artist}
                  onChange={this.handleChange}
                  required
                />
            </div>
            <div className="form-group">
              <label>Song:</label>
                <input
                  className="form-control"
                  type="text"
                  id="title"
                  ref="Title"
                  value={title}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <button value="Submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
        <SearchSongsView />
      </section>
    );
  }
}
function mapStateToProps(songs) {
    return songs;
}

function mapDispatchToProps(dispatch) {
  return {
    SearchReducer( song) {
      const action = SearchSongsActionCreator(song);

      dispatch(action);
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SongsSearchEngine);;
