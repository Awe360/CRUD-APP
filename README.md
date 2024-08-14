
# My Songs CRUD Application

A full-stack CRUD application for managing songs, built with React, Redux Toolkit, Redux-Saga, and Tailwind CSS on the frontend, and Node.js with Express on the backend.
This app allows users to create, read, update, and delete songs from a list.

## Features

Add Songs: Users can add new songs to the list.
View Songs:Users can view all the songs in the list.
Update Songs:Users can edit the details of an existing song.
Delete Songs:Users can remove songs from the list.
Responsive Design: The app is styled with Tailwind CSS, ensuring it looks great on all devices.

## Technologies Used

## Frontend:
React: For building the user interface.
Redux Toolkit: For managing the application state.
Redux-Saga:For handling side effects (e.g., API calls).
Tailwind CSS:For styling the application.

## Backend:
Node.js and Express: For building the RESTful API.


## Getting Started

### Prerequisites
Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Awe360/song-crud-app.git
   cd song-crud-app
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install frontend dependencies
   npm install

   # Navigate to the backend directory and install dependencies
   cd backend
   npm install
   ```

3. Configure the Backend:
   

4. Run the Backend Server:
   ```bash
   cd backend
   npm run dev
   ```

5. Run the Frontend Development Server:
   ```bash
   cd ..
   npm run dev
   ```

## Usage

Add a Song:Fill in the form with song details (title, artist, album, and year) and click "Add Song."
Edit a Song:Click the "Edit" button next to a song, update the details, and save.
Delete a Song:Click the "Delete" button next to a song to remove it from the list.

### Folder Structure

```bash
song-crud-app/
│
├── public/
├── src/
│   ├── components/
│   │   ├── SongForm.jsx
│   │   ├── SongItem.jsx
│   │   └── SongList.jsx
│   ├── features/
│   │   └── songs/
│   │       ├── SongSlice.jsx
│   │       └── SongSaga.jsx
│   ├── App.js
│   ├── index.js
│   └── Store.js
│
├── backend/
│   ├── server.jsx
│   ├── package.json
│   └── ...
│
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── package.json


