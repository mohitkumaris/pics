import React from "react";

class SearchBar extends React.Component {
  state = { term: "" }; // Controlled component
  // Arrow function to remove this undefined error.
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term); // Now this is instance of SearchBar
    this.props.onSubmit(this.state.term); // This is how we send the value from child to parent
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} // this is how we work in React
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button
              type="button"
              className="ui button"
              onClick={this.onFormSubmit}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
