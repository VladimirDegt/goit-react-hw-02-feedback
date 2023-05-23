import PropTypes from 'prop-types';
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";

export function Section(props){
  console.log(props);
  return (
     <>
        <h1>{title}</h1>
        <FeedbackOptions 
          options = {options} 
          onLeaveFeedBack = {onLeaveFeedBack}
        />

        <h2>{title}</h2>
        <Statistics
          good = {good}
          neutral = {neutral}
          bad = {bad}
        >
        </Statistics>
      </>
    
  )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedBack: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};