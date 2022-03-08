import FeedbackItem from './FeedbackItem'
import Proptypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem 
        key={item.id} 
        item={item}
        handleDelete={ handleDelete }
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number.isRequired,
      text: Proptypes.string.isRequired,
      rating: Proptypes.number.isRequired
    })
  )
}

export default FeedbackList
