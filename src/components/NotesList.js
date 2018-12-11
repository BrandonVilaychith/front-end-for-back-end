// React imports
import React from 'react';
// Component imports
import Note from './Note';
// CSS import
import './css/NotesList.css';

const NotesList = props => {
  const { notes } = props;
  return (
    <div className="notesList">
      <h2>Your Notes:</h2>
      <div className="notesContainer">
        {notes.map(note => {
          return <Note note={note} key={note.id} />;
        })}
      </div>
    </div>
  );
};

export default NotesList;
