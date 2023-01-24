import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import db from  './db/quotes.json'

const colorsForQuotes = [`#6fbcaa`, `#012677` , `#5e5473`,`#fac055`,`#d24858`,`#3e3e53`,`#036564`,`#ab0768`,`#b69198`,`#8cbfe6` , `#24c0eb`,`#ffc6a5`,`#274862` , `#995052` , `#4b4b55` , `#bcebdf`, `#6743a5`, `#9a947c`,`#ba4c57`] 

function App() {

  const bringQuotes = (elementsJason) => {
    const values = elementsJason.length
    const index = Math.floor(Math.random() * values);
    return elementsJason[index]
  }

  const [quote, setQuote] = useState(bringQuotes(db));

  const [color, setColor] = useState(bringQuotes(colorsForQuotes));
  
  const newQuote = () => {
    setQuote(bringQuotes(db))
    setColor(bringQuotes(colorsForQuotes))
  }
  console.log(db)
  return (
    <div className="App" style={{backgroundColor: color}}>
    <QuoteBox quote={quote} newQuote={newQuote} color={color} />
    </div>
  )
}

export default App
