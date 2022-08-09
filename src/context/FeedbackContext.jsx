import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetchFeedback()
  }, [])

  //Fetch feedback from localStorage
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:3000/feedback?_sort=id&_order=desc`
    )
    const data = await response.json()

    setFeedback(data)
    setLoading(false)
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`http://localhost:3000/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const response = await fetch(`http://localhost:3000/feedback/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json()

      setFeedback(feedback.filter((feedback) => feedback.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedback, addFeedback, loading }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
