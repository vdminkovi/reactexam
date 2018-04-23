import { actionTypes } from './action-types';

export const loadSongsActionCreator = (songs) => ({
  type: actionTypes.LOAD_SONGS,
  songs: songs
});
export const SearchSongsActionCreator = (song) => ({
  type: actionTypes.SEARCH_SONGS,
  song:song,
});
export const createPlaylistActionCreator = (playlists, artist, type) => ({
  type: actionTypes.PLAYLISTS,
  artist:artist,
  playlists:playlists,
});
