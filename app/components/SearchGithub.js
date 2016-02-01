import React from 'react';

class SearchGithub extends React.Component {
  getRef(ref) {
    this.usernameRef = ref;
  }
  handleSubmit() {
    const username = this.usernameRef.value;
    this.usernameRef.value = '';
    // this.history comes from the parent component's router
    this.props.history.pushState(null, '/profile/' + username);
  }
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef.bind(this)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  }
}

SearchGithub.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default SearchGithub;
