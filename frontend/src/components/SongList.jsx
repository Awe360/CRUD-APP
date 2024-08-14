import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequest } from '../features/songs/SongSlice';
import SongItem from './SongItem';
import SongForm from './SongForm';

function SongList() {
  const dispatch = useDispatch();
  const { songs, loading } = useSelector((state) => state.songs);
  const [editSong, setEditSong] = useState(null);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">MY SONGS CRUD APP</h1>
      <SongForm editSong={editSong} setEditSong={setEditSong} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-6">
          {songs.map((song) => (
            <SongItem key={song.id} song={song} setEditSong={setEditSong} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SongList;
