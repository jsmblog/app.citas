import React from 'react'

const QuoteButton = ({newQuote , color}) => {
return (
    <button className='quoteBox-btn' onClick={newQuote} style={{backgroundColor:color}}>
        <img src="/public/iconmonstr-arrow-right-circle-thin.svg" alt="" width={30} />
    </button>
)
}

export default QuoteButton