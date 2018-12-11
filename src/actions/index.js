// Axios import
import axios from 'axios';
// Action exports
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';
export const FETCH_SINGLE_NOTE = 'FETCH_SINGLE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SEARCH_TERM = 'SEARCH_TERM';

// Will fetch the notes data from the API
export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES });
  axios
    .get('https://lambda-notes-blv.herokuapp.com/api/notes')
    .then(response => {
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
    });
};

// Adds a note
export const addNote = note => dispatch => {
  axios
    .post('https://lambda-notes-blv.herokuapp.com/api/notes', note)
    .then(response => {
      note.id = response.data[0];
      dispatch({ type: ADD_NOTE_SUCCESS, payload: note });
    })
    .catch(error => {
      dispatch({ type: ADD_NOTE_FAILURE, payload: error });
    });
};

// Displays one note
export const fetchSingleNote = id => dispatch => {
  dispatch({ type: FETCH_NOTES });
  axios
    .get(`https://lambda-notes-blv.herokuapp.com/api/notes/${id}`)
    .then(response => {
      dispatch({ type: FETCH_SINGLE_NOTE, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
    });
};

// Deletes a note
export const deleteNote = id => dispatch => {
  axios
    .delete(`https://lambda-notes-blv.herokuapp.com/api/notes/${id}`)
    .then(response => {
      dispatch({ type: DELETE_NOTE, payload: id });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
    });
};

// Edit one note
export const editNote = (id, note) => dispatch => {
  axios
    .put(`https://lambda-notes-blv.herokuapp.com/api/notes/${id}`, note)
    .then(response => {
      dispatch({ type: EDIT_NOTE, payload: response.data });
    });
};

// Filters notes based on search
export const searchNotes = searchTerm => dispatch => {
  dispatch({ type: SEARCH_TERM, payload: searchTerm });
};
