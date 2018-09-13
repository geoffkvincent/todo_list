import React from 'react'

class Market extends React.Component {
  state = { coins: [], loading: true }

  componentDidMount() {
    this.fetchCoins()
    this.interval = setInterval( this.fetchCoins, 60000 * 5 )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  fetchCoins = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10')
      .then( res => res.json() )
      .then( res => { 
        const coins = []
        Object.keys(res.data).forEach( thing => 
          coins.push(res.data[thing])
        )
        this.setState({ coins, loading: false }) 
      })
  }

  render() {
    const { coins, loading } = this.state

    if (loading) {
      return <div>Fetching data...</div>
    } else {
      return (
        <ol>
          { coins.map( c => 
              <li key={c.id}>{c.symbol} - ${c.quotes.USD.price.toFixed(2)}</li> 
            )
          }
        </ol>
      )
    }
  }
}

export default Market
