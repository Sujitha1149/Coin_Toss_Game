import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    head: 0,
    tail: 0,
  }

  onTossImageClicked = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: prevState.total + 1,
        head: prevState.head + 1,
        tail: prevState.tail,
      }))
    } else {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: prevState.total + 1,
        head: prevState.head,
        tail: prevState.tail + 1,
      }))
    }
  }

  render() {
    const {imageUrl, total, head, tail} = this.state

    return (
      <div className="bg-contqainer">
        <div className="card-container">
          <h1 className="head">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="img" />
          <button
            type="button"
            className="button"
            onClick={this.onTossImageClicked}
          >
            Toss Coin
          </button>
          <div className="total-count">
            <p>Total:{total}</p>
            <p>Heads:{head}</p>
            <p>Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
