import PropTypes from 'prop-types';
import { ButtonsList, Button } from "./FeedbackOptions.styled";

function FeedbackOptions({onLeaveFeedBack}){
  return (
    <ButtonsList onClick={onLeaveFeedBack}>
      <li><Button>Good</Button></li>
      <li><Button>Neutral</Button></li>
      <li><Button>Bad</Button></li>
    </ButtonsList>
  )
};

FeedbackOptions.propTypes = {
  onLeaveFeedBack: PropTypes.func.isRequired,
};

export default FeedbackOptions;