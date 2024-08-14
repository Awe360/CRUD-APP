import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSongRequest } from '../features/songs/SongSlice';

function SongItem({ song, setEditSong }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSongRequest(song.id));
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div>
        <h3 className="text-lg font-semibold">{song.title}</h3>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Year: {song.year}</p>
      </div>
      <div>
        <button
          onClick={() => setEditSong(song)}
          className="mr-2 p-2 bg-yellow-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="p-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SongItem;
