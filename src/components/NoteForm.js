// React imports
import React, { Component } from 'react';
// React Router
import { withRouter } from 'react-router-dom';
// CSS import
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: '',
        content: ''
      }
    };
  }

  changeHandler = e => {
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (!this.state.note.title && !this.state.note.content) {
      return alert('Missing Information');
    }
    this.props.addNote(this.state.note);
    this.props.history.push('/');
  };

  render() {
    const { title, content } = this.state.note;
    return (
      <form className="noteForm">
        <h2>Create New Note:</h2>
        <input
          required
          type="text"
          name="title"
          placeholder="Note Title"
          value={title}
          autoComplete="off"
          onChange={this.changeHandler}
        />
        <textarea
          required
          type="text"
          name="content"
          placeholder="Note Content"
          value={content}
          autoComplete="off"
          onChange={this.changeHandler}
        />
        <br />
        <button onClick={this.submitHandler}>Add Note</button>
      </form>
    );
  }
}

export default withRouter(NoteForm);
