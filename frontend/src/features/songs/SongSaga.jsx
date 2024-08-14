import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
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
} from './SongSlice';

const API_URL = 'http://localhost:3001/songs';

function* fetchSongs() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSong(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put(addSongSuccess(response.data));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* updateSong(action) {
  try {
    const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* deleteSong(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

function* songSaga() {
  yield takeEvery(fetchSongsRequest.type, fetchSongs);
  yield takeEvery(addSongRequest.type, addSong);
  yield takeEvery(updateSongRequest.type, updateSong);
  yield takeEvery(deleteSongRequest.type, deleteSong);
}

export default songSaga;
