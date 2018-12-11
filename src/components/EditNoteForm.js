// React imports
import React, { Component } from 'react';
// React Router
import { withRouter } from 'react-router-dom';
// CSS import
import './NoteForm.css';

class EditNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: '',
        content: ''
      }
    };
  }

  componentDidMount() {
    this.setState({
      note: {
        ...this.state.note,
        title: this.props.notes[0].title + '',
        content: this.props.notes[0].content + ''
      }
    });
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
    this.props.history.push('/');
  };

  editNote = e => {
    e.preventDefault();
    this.props.editNote(this.props.notes[0].id, this.state.note);
    this.props.history.push('/');
  };

  render() {
    const { title, content } = this.state.note;
    return (
      <form className="noteForm">
        <h2>Edit Note:</h2>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={title}
          autoComplete="off"
          onChange={this.changeHandler}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Note Content"
          value={content}
          autoComplete="off"
          onChange={this.changeHandler}
        />
        <br />
        <button onClick={this.editNote}>Update</button>
      </form>
    );
  }
}

export default withRouter(EditNoteForm);
