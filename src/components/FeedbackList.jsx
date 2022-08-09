import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'

import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'

const FeedbackList = () => {
  const { feedback, loading } = useContext(FeedbackContext)

  if (!loading && (!feedback || feedback.length === 0)) {
    return <div>No feedback found</div>
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: 'none' }}>
            <FeedbackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((feedback) => (
  //       <FeedbackItem
  //         key={feedback.id}
  //         feedback={feedback}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList
