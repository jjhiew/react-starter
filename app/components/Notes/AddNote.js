import React from 'react';

class AddNote extends React.Component {
  handleSubmit() {
    var note = this.note.value;
    this.note.value = '';
    // Add note by invoking function passed from parent
    this.props.addNote(note);
  }

  setRef(ref) {
    this.note = ref;
  }

  render() {
    // two ways of showing this content binding
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Type new note here"
          ref={ref => this.setRef(ref)}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button"
            onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>
      </div>
    );
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;
