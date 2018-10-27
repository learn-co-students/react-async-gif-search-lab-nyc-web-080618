import React, { Component } from 'react';

class GifSearch extends Component {

  state= {
    searchInput: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.searchInput)
    this.setState({
      searchInput: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter a Search Term:</label>
          <input type="text" name="searchInput" value={this.state.searchInput} onChange={this.handleChange}/>
          <input type="submit" value="Find Gifs"/>
      </form>
    );
  }

}

export default GifSearch;
