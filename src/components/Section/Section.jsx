import PropTypes from 'prop-types';
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Notification from "components/Notification";

export function Section({title, numberSection, onLeaveFeedBack, good, neutral, bad, total, positiveFeedback}){
  return (
    numberSection === '1'
    ? <>
        <h1>{title}</h1>
        <FeedbackOptions 
          options = {['Good', 'Neutral', 'Bad']} 
          onLeaveFeedBack = {onLeaveFeedBack}/>
      </>
    : <>
        <h2>{title}</h2>
        <Statistics
          good = {good}
          neutral = {neutral}
          bad = {bad}
          total = {total}
          positiveFeedback = {positiveFeedback}
        >
          <Notification message="There is no feedback"/>
        </Statistics>
      </>
    
  )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  numberSection: PropTypes.string.isRequired,
  onLeaveFeedBack: PropTypes.func,
};