import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSongRequest, updateSongRequest } from '../features/songs/SongSlice';

function SongForm({ editSong, setEditSong }) {
  const dispatch = useDispatch();
  const [song, setSong] = useState({ title: '', artist: '', album: '', year: '' });

  useEffect(() => {
    if (editSong) {
      setSong(editSong);
    }
  }, [editSong]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editSong) {
      dispatch(updateSongRequest(song));
      setEditSong(null);
    } else {
      dispatch(addSongRequest(song));
    }
    setSong({ title: '', artist: '', album: '', year: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={song.title}
        onChange={(e) => setSong({ ...song, title: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Artist"
        value={song.artist}
        onChange={(e) => setSong({ ...song, artist: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Album"
        value={song.album}
        onChange={(e) => setSong({ ...song, album: e.target.value })}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        placeholder="Year"
        value={song.year}
        onChange={(e) => setSong({ ...song, year: e.target.value })}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        {editSong ? 'Update Song' : 'Add Song'}
      </button>
    </form>
  );
}

export default SongForm;
