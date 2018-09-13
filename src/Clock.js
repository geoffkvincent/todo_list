import React from 'react'

class Clock extends React.Component {
  state = { time: new Date() }

  componentDidMount() {
    this.ticker = setInterval( this.tick, 1000 )
  }

  componentWillUnmount() {
    clearInterval(this.ticker)
  }

  tick = () => {
    this.setState({ time: new Date() })
  }

  render() {
    return (
      <h1>
        { this.state.time.toLocaleTimeString() }
      </h1>
    )
  }
}

export default Clock
