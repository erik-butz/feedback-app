import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  //Fetch Feedbcak
  const fetchFeedback = async () => {
    const reponse = await fetch(`/feedback?_sort=id_order=desc`)
    const data = await reponse.json()
    setFeedback(data)
    setIsLoading(false)
  }

  //add feedback item
  const addFeedback = async (newFeedback) => {

    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    //destructuring all the existing feedback and adding the new feedback to the array
    setFeedback([data, ...feedback])
  }

  //delete feedback item
  //filter -> looks through all of the items in the feedback array, if it matches one with the same id then we update the state of feedback for that item with the edited value in the form
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {

      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  //update feedback item
  const updateFeedback = async (id, updItem) => {

    const response = await fetch(`feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem)
    })

    const data = await response.json()

    setFeedback(feedback.map((item) =>
      (item.id === id ? { ...item, ...data } : item))
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
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext