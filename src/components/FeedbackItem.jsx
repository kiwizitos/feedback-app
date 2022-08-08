import { useContext } from 'react'

import { FaTimes, FaEdit } from 'react-icons/fa'

import FeedbackContext from '../context/FeedbackContext'

import Card from './shared/Card'

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem
