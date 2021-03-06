import React, {useState, useEffect} from 'react'
import ProductContext from '../context.jsx'; //ACTION: Delete when refactored
import QAstyles from './styles/QAstyles.css'
import AnswerEntries from './QA-AnswerEntries.jsx'
import AModal from './QA-AnswerModal.jsx'

let QuestionEntries = function({body, asker, date, helpfulCount, reported, answers, qCount}) {
  const QAqentriesContext = React.useContext(ProductContext); // ACTION: Delete and pass product name as a prop when refactoring
  let aCount = answers.length;

  //SORT THE ANSWERS BY HELPFULNESS COUNT
  const orderedAnswers =  answers.sort((a, b) => {
    return (a.helpfulness > b.helpfulness) ? -1: 1
  })

  //STATE HOOKS
  const [arrayOfAnswers, setArrayOfAnswers] = useState(orderedAnswers.slice(0,2))
  const [displayedIndex, setDisplayedIndex] = useState(0)
  const [isFullyLoaded, setIsFullyLoaded] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [showAModal, setShowAModal] = useState(false)

  //DISPLAY HELPER FUNCTION
  const displayedAnswers = (index) => {
      setArrayOfAnswers(orderedAnswers.slice(0, index))
      setDisplayedIndex(index)
  }

  //CLICK HANDLERS
  const hideAnswersClickHandler = (e) => {
    setIsHidden(!isHidden)
  }

  const aModalClickHandler = (e) => {
    setShowAModal(true)
  }

  const loadClickHandler = (e) => {
    if (displayedIndex === aCount) {
      displayedAnswers(aCount);
    } else if (displayedIndex >= aCount-2) {
      displayedAnswers(aCount)
      setIsFullyLoaded(true);
    } else {
      displayedAnswers(displayedIndex+2)
    }
  }

  const collapseClickHandler = (e) => {
    displayedAnswers(2)
    setIsFullyLoaded(false)
  }

  //USE EFFECT HOOK
  useEffect(() => {
    displayedAnswers(2)
    }, [])

  return (
    <>
    <div className="QAqentries">
      <div className="QAqentries_metaContainer">
        {/* <span className="QAqentries_question">Q:</span> */}
        <span className="QAqentries_meta">From: {asker}</span>
        <span className="QAqentries_meta">{date}</span>
        <span className="QAqentries_meta">Mark as Helpful ({helpfulCount})</span>
        <span className="QAqentries_meta">Report</span>
      </div>
      <div className="QAqentries_questionBody">Q: {body}
      <button className="accordion" onClick={hideAnswersClickHandler}>V</button>
      <div className="QAqentries_answers">
        1-{displayedIndex} of {aCount} Answers
        <button className="QAqentries_addButton" type="button" onClick={aModalClickHandler}>Add an answer</button>

        {/* Conditionally renders the array of answers in the current state */}
      </div>
      {isHidden ?
        null
        :
        <div>
          {arrayOfAnswers.map((answer) => {
            return (<AnswerEntries
            responder={answer.answerer_name}
            body={answer.body}
            date={answer.date}
            helpfulCount={answer.helpfulness}
            images={answer.photos}
            aCount={aCount}
            key={answer.id} />)
          })
          }
        </div>
      }
        </div>
    </div>

    {/* Conditional render of Load more / Collapse buttons */}
    <div>
      {isFullyLoaded ?
      <div className="QAqentries_collapse">
        <span className="QAqentries_displayCount">Answers 1-{aCount}</span>
        <button className="QAqentries_collapseButton" type="button" onClick={collapseClickHandler}>Collapse answers</button>
      </div>
      :
      <div className="QAqentries_loadMore">
        <span className="QAqentries_displayCount">Answers 1-{displayedIndex} of {aCount}</span>
        <button className="QAqentries_loadButton" type="button" value={displayedIndex} onClick={loadClickHandler}>Load more answers</button>
      </div>
      }
    </div>

    {/* Conditional rendering of Answer Modal */}
    {showAModal ?
    <AModal setShowAModal={setShowAModal} productName={QAqentriesContext.productName} body={body}/> //ACTION: pass down prop when refactored
    : null
    }
    </>
  )
}

export default QuestionEntries