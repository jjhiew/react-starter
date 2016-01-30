var React = require('react');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    console.log('Repos: ', this.props.repos);
    return (
      <div>
        <p>Repos</p>
      </div>
    );
  }

});

module.exports = Notes;
