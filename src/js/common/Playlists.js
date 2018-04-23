import React from 'react';
import { connect } from 'react-redux';


class  Playlists extends React.Component {
  constructor(props) {
  super(props);
}
componentDidMount() {


}

  render(){
    if(this.props.playlists.length) {
        return(
          <ul className="list-group">
                {
                this.props.playlists.map(result =>
                    <li className="list-group-item">
                      <p key={result.artist}>{result.artist}:</p>
                      <div>{result.playlists.map(p=>
                          <p>{p.title}</p>
                        )}
                        </div>
                    </li>
                )
                }
            </ul>
        )

  } else {
    return "no playlists"
  }

  }


}
function mapStateToProps(songs) {
    console.log('songs', songs);
    return songs;
}

export default connect(mapStateToProps)(Playlists)
