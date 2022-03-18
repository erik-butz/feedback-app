import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This item feedback item 2',
      rating: 6
    },
    {
      id: 3,
      text: 'This item feedback item 3',
      rating: 8
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  //add feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    //destructuring all the existing feedback and adding the new feedback to the array
    setFeedback([newFeedback, ...feedback])
  }

  //delete feedback item
  //filter -> looks through all of the items in the feedback array, if it matches one with the same id then we update the state of feedback for that item with the edited value in the form
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  //update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) =>
      (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  //set which feedback item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext