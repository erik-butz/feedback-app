import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import Proptypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: Proptypes.object.isRequired,
}

export default FeedbackItem
