import PropTypes from 'prop-types';
import Notification from "components/Notification";
import { StatisticsList, ItemList } from "./Statistics.styled";
import { countTotalFeedback } from 'utils/count-total-feedback';
import { countPositiveFeedbackPercentage } from 'utils/count-positive-feedback-percentage';

function Statistics({options}) {
  const {good, neutral, bad} = options;
  const total = countTotalFeedback(good, neutral, bad);

  return (
    (good !== 0 || neutral !== 0 || bad !== 0)
    ?
    <StatisticsList>
      <ItemList>Good: {good}</ItemList>
      <ItemList>Neutral: {neutral}</ItemList>
      <ItemList>Bad: {bad}</ItemList>
      <ItemList>Total: {total}</ItemList>
      <ItemList>Positive feedback: {countPositiveFeedbackPercentage(good, total)}%</ItemList>
    </StatisticsList>
    :
    <Notification message="There is no feedback"/>
  )
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired  
};

export default Statistics;