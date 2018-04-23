import { actionTypes } from '../actions/action-types';

export default function playlistReducer(state = [], {type, playlists, artist}) {
  if (type === actionTypes.PLAYLISTS) {
    console.log('newstate-playlist', [...state, {playlists}]);
    return [...state, {playlists, artist}];
  }

  return state;
}
