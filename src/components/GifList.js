import React from 'react'

class GifList extends React.Component {

  render () {
    const gifList = this.props.gifs.map(gif => {
      return <li><img alt={gif.url} src={gif.images.fixed_height.url} /></li>
    })
    return (
      <div>
        <ul>
          {gifList}
        </ul>
      </div>
    )
  }
}

export default GifList
