import React from 'react'
import imgarrow from '/public/img-arrow.png'

const QuoteButton = ({newQuote , color}) => {
return (
    <button className='quoteBox-btn' onClick={newQuote} style={{backgroundColor:color}}>
        <img src={imgarrow}  width={30} />
    </button>
)
}

export default QuoteButton