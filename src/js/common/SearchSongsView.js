import React from 'react';
import { connect } from 'react-redux';
import {Song} from './Song';

class  SearchSongsView extends React.Component {
  constructor(props) {
  super(props);
}
componentDidMount() {

  console.log(this.props);
}

  render(){

    return(
      <div className="row">
      <hr/>
      <h2 className="col-12">Songs Found:</h2>
      {
      this.props.search.map(song =>
        <div className="col-3">
        {
          song.song.map(p =>
            <Song
                id={p.id}
                title={p.title}
                artist={p.artist}
                image={p.image}
            />
          )
        }

        </div>
          )
      }
      </div>
    )
  }


}
function mapStateToProps(songs) {
    console.log('songs', songs);
    return songs;
}

export default connect(mapStateToProps)(SearchSongsView)
