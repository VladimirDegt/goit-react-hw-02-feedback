import PropTypes from 'prop-types';
import { ButtonsList, Button } from "./FeedbackOptions.styled";

function FeedbackOptions({onLeaveFeedBack, options}){
  return (
    <ButtonsList>
      {options.map( (item) => <li key={item}><Button onClick={()=>onLeaveFeedBack(item)}>{item[0].toUpperCase() + item.slice(1)}</Button></li>)}
    </ButtonsList>
  )
};

FeedbackOptions.propTypes = {
  onLeaveFeedBack: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;