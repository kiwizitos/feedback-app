import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBd1410LOuSPFdf5CRUfn1d4CNQtIBsguM',
  authDomain: 'feedback-6fb8a.firebaseapp.com',
  projectId: 'feedback-6fb8a',
})

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const db = getFirestore(firebaseApp)
  const feedbackCollection = collection(db, 'feedbacks')

  useEffect(() => {
    const getFeedback = async () => {
      const data = await getDocs(feedbackCollection)
      setFeedback(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setLoading(false)
    }
    getFeedback()
  }, [])

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await addDoc(feedbackCollection, newFeedback)

    setFeedback([{ ...newFeedback, id: response.id }, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const response = await doc(db, 'feedbacks', id)
      await deleteDoc(response)

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
