import React from 'react'
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function Card({quotes}) {
  return (
    <div>
         <FormatQuoteIcon fontSize="large" className="text-5xl mt-1 text-violet-900 rotate-180 " />
              <h1 className="mt-1 caveat text-white leading-9 md:leading-7 text-4xl md:text-3xl">{quotes[0].quote} </h1>
              <FormatQuoteIcon fontSize="large" className="text-5xl text-violet-900 mt-1  " />
              <h3 className="text-left caveat text-white tracking-wide text-2xl"> - {quotes[0].author} </h3>
    </div>
  )
}

export default Card