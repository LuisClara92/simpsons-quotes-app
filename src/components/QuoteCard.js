import React from 'react'

const QuoteCard = ({ simpsonQuote }) => {
    return (
        <div>
          <h3>{simpsonQuote.character}</h3>
          <img src={simpsonQuote.image} alt={simpsonQuote.character} height='300px' width='200px'/>
          <p>{simpsonQuote.quote}</p>
        </div>
    )
}

export default QuoteCard