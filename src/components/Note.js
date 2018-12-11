// React import
import React from 'react';
// CSS imports
import './css/Note.css';
// React router imports
import { Link } from 'react-router-dom';

const Note = props => {
  const { title, content, id } = props.note;
  return (
    <Link to={`/note/get/${id}`} className="cardLink">
      <div className="note">
        <h3 className="noteTitle">{title}</h3>
        <p className="noteBody">{content}</p>
      </div>
    </Link>
  );
};

export default Note;
