import { actionTypes } from '../actions/action-types';

export default function songsReducer(state = [], {type, songs}) {
  if (type === actionTypes.LOAD_SONGS) {
    console.log('newstate', [...state, {songs}]);
    return [...state, {songs}];
  }

  return state;
}
