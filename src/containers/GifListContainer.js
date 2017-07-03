import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      gifs: []
    }
  }

  searchGifs (searchTerms) {
    // event.preventDefault()
    const getUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerms}&api_key=dc6zaTOxFJmzC`
    fetch(getUrl).then(resp => resp.json())
      .then(data => {
        this.setState({
          gifs: data.data
        })
      })
  }

  render () {
    return (
      <div>
        <GifSearch searchCallback={this.searchGifs.bind(this)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
