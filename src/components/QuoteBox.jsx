import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote , newQuote , color}) => {
return (
<div className='quoteBox' style={{color:color}}>
    <p className='quote-paragraph'>{quote.quote}</p>
    <h3 className='quote-author'>{quote.author}</h3>
    <QuoteButton newQuote={newQuote} />
    
</div>
)
}

export default QuoteBox