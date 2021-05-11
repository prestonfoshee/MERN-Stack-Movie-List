import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import SearchOne from './components/SearchOne';
import SearchMany from './components/SearchMany';
import DeleteOne from './components/DeleteOne';
import UpdateOne from './components/UpdateOne';
import MovieCount from './components/MovieCount';

function App() {
  return (
    <div className="App">
      <div className="addMovie">
        <AddMovie />
        <SearchOne />
        <SearchMany />
        <DeleteOne />
        <UpdateOne />
      </div>
      <MovieCount />
    </div>
  );
}

export default App;
