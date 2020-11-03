import React, { Component } from 'react'
import axios from 'axios'
import QuoteCard from './QuoteCard'
import { Card } from './styles';

class Quotes extends Component {
  state = {
    quote: ''
  }
  getRandomQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => this.setState({
        quote: response.data[0]}))
  }
  render() {
    return (
      <Card>
        <button onClick={this.getRandomQuote}>Get New Quote</button>
        <QuoteCard simpsonQuote={this.state.quote}/>
      </Card>
    );
  }
}

export default Quotes;