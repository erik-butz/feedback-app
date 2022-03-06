import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback}/>
      <div className='container'>
      </div>
    </>
  )
}

export default App
