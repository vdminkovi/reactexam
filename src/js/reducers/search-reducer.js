import { actionTypes } from '../actions/action-types';

export default function SearchReducer(state = [], { type, song}) {
  if (type === actionTypes.SEARCH_SONGS) {
    console.log("newstate-search", [...state, { song }])
    return [...state, { song}];
  }

  return state;
}
