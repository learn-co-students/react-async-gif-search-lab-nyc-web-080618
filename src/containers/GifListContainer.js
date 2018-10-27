import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

  state = {
    gifs: [],
    searchInput: "dolphins"
  }

  componentDidMount(){
    this.getGifs()
  }

  handleSubmit = (input) => {
    this.setState({
      searchInput: input
    }, () => this.getGifs() )
  }

  getGifs () {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(r => r.json())
    .then(data => this.setState({
      gifs: data.data
    }))
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <GifList gifs={this.state.gifs}/>
        </div>
        <div>
          <GifSearch handleSubmit={this.handleSubmit}/>
        </div>
      </React.Fragment>
    );
  }

}

export default GifListContainer;
