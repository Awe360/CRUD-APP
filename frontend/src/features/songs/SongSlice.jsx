import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addSongRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addSongSuccess: (state, action) => {
      state.loading = false;
      state.songs.push(action.payload);
    },
    addSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateSongRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action) => {
      state.loading = false;
      const index = state.songs.findIndex(song => song.id === action.payload.id);
      state.songs[index] = action.payload;
    },
    updateSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteSongSuccess: (state, action) => {
      state.loading = false;
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
    deleteSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  addSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
} = songSlice.actions;

export default songSlice.reducer;
