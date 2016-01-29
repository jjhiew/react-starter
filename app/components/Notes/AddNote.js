var React = require('react');

var AddNote = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  setRef: function(ref) {
    this.note = ref;
  },
  handleSubmit: function() {
    var note = this.note.value;
    this.note.value = '';
    // Add note by invoking function passed from parent
    this.props.addNote(note);
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Type new note here" ref={this.setRef}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  }

});

module.exports = AddNote;
