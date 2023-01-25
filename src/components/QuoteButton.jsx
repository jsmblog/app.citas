import React from 'react'

const QuoteButton = ({newQuote , color}) => {
return (
    <button className='quoteBox-btn' onClick={newQuote} style={{backgroundColor:color}}>
        <img src="/public\img-arrow-removebg-preview.png" alt="" width={30} />
    </button>
)
}

export default QuoteButton