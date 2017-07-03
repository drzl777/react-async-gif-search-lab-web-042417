import React from 'react'

class GifSearch extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  updateQuery (event) {
    this.setState({
      query: event.target.value
    })
  }

  submitSearch (event) {
    event.preventDefault()
    this.props.searchCallback(this.state.query)
  }

  render () {
    return (

      <form onSubmit={this.submitSearch.bind(this)}>
        <input type='text' value={this.state.query} onChange={this.updateQuery.bind(this)} />
      </form>
    )
  }
}

export default GifSearch
