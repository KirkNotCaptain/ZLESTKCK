import React from 'react'

let QASearch = function(props) {
  return (
    <div className="QAsearch">
      <input
        type="search"
        className="QAsearch_bar"
        minLength="3"
        placeholder="Have a question? Search for your answers..."
        size="70">
      </input>
    </div>
  )
}

export default QASearch