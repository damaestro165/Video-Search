import React from "react";

export class Search extends React.Component {
  state = { term: "" };

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };

  OnFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.term);
  };
  render() {
    return (
      <div className=" w-full">
        <form onSubmit={this.OnFormSubmit} className="items-center w-full">
          <label className="sr-only">Video Search</label>
          <div className="flex items-center w-full justify-center">
            <input
              className=" w-4/5 md:w-3/5 border-2 border-slate-900 rounded-full p-2"
              type="search"
              placeholder="Search Video"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
