const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let songs = [
  { id: 1, title: 'Ethiopia Hagere', artist: 'Tamrat', album: 'Album 1', year: 2003 },
  { id: 2, title: 'Abay', artist: 'Tedy', album: 'Album 1', year: 2005 },
];

app.get('/songs', (req, res) => {
  res.json(songs);
});

app.post('/songs', (req, res) => {
  const newSong = { id: Date.now(), ...req.body };
  songs.push(newSong);
  res.json(newSong);
});

app.put('/songs/:id', (req, res) => {
  const { id } = req.params;
  const index = songs.findIndex(song => song.id === parseInt(id));
  songs[index] = { id: parseInt(id), ...req.body };
  res.json(songs[index]);
});

app.delete('/songs/:id', (req, res) => {
  const { id } = req.params;
  songs = songs.filter(song => song.id !== parseInt(id));
  res.json({ message: 'Song deleted' });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
