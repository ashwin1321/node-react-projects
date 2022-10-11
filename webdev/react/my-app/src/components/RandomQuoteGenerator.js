import React, {useState} from 'react'

const quotes = ['Be good do good', 'get a life', "yo got this", "you are awesome",'be a good human being']
const RandomQuoteGenerator = () => {

    const [quote, setQuote] = useState(quotes[0])

    function getRandomQuote(){
        // generating random choice
        const randomChoice = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(randomChoice)
    }

  return (
    <div>
      
      <div>{quote}</div>
      <button onClick={getRandomQuote}>Click me</button>

    </div>
  )
}

export default RandomQuoteGenerator
