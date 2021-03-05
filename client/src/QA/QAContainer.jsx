import React, {useState} from 'react'
import ProductContext from '../context.jsx';
import QAstyles from './styles/QAstyles.css'

import fetchProductDetails from '../FetchData/fetchProductDetails.js'

import QASearch from './QA-Search.jsx'
import QAList from './QA-List.jsx'
import QModal from './QA-QuestionModal'

let QAContainer = function(props) {

  const QAContainerContext = React.useContext(ProductContext);

  const [showQModal, setShowQModal] = useState(false)

  const qModalClickHandler = (e) => {
    setShowQModal(true)
  }

  return (
    <div className="QAcontainer">
      <h2 className="QAcontainer_header">Customer Questions</h2>
      <h4 className="QAcontainer_subheader">Ask for information about this product from the customers who own it.</h4>
      <input className="QAlist_askButton" type="button" value="Ask a question" onClick={qModalClickHandler} ></input>
      {showQModal ?
      <QModal setShowQModal={setShowQModal} productName={QAContainerContext.productName} />
      : null
      }
      <QASearch />
      <QAList />
    </div>
  )
}

export default QAContainer