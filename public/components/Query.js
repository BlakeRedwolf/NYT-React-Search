import React from "react";

export default class Saved extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading text-center">
        <h4>Search</h4>
        </div>
        <div className="panel-body">
          <label htmlFor="topic">Topic</label>
            <input type="text" id="topic" />
          <label htmlFor="startYear">Start Year</label>
            <input type="date" placeholder="yyyy-mm-dd" id="startYear" />
          <label htmlFor="endYear">End Year</label>
            <input type="date" placeholder="yyyy-mm-dd" id="endYear" />
          <button onClick={this.props.onSearch} className="search btn btn-default">Search</button>
        </div>
      </div>
    )
  }
}