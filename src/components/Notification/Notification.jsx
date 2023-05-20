import PropTypes from 'prop-types';
import { TextMessage } from "./Notification.styled"

function Notification({message}) {
  return (
    <TextMessage>{message}</TextMessage>
  )
};

Notification.propTypes ={
  message: PropTypes.string.isRequired,
}

export default Notification;