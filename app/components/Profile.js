var React = require('react');
var Router = require('react-router');
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

import getGithubInfo from '../utils/helpers';

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [1, 2, 3],
      bio: {},
      repos: []
    };
  },
  componentDidMount: function() {
    this.ref = new Firebase('https://jj-react-test.firebaseio.com');
    this.init(this.props.params.username);
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('The next propers are: ', nextProps);
    this.unbind('notes');
    this.init(nextProps.params.username);
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  init: function(username) {
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    getGithubInfo(username)
      .then(function(data) {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      }.bind(this));
  },
  handleAddNote: function(note) {
    // update firebase with new note
    var childRef = this.ref.child(this.props.params.username);
    // set item to array at key
    childRef.child(this.state.notes.length).set(note);
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
              username={this.props.params.username}
              notes={this.state.notes}
              addNote={this.handleAddNote}/>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
