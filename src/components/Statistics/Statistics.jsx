import PropTypes from 'prop-types';
import { StatisticsList, ItemList } from "./Statistics.styled"

function Statistics({good, neutral, bad, total, positiveFeedback, children}) {
  return (
    total !== 0
    ?
    <StatisticsList>
      <ItemList>Good: {good}</ItemList>
      <ItemList>Neutral: {neutral}</ItemList>
      <ItemList>Bad: {bad}</ItemList>
      <ItemList>Total: {total}</ItemList>
      <ItemList>Positive feedback: {positiveFeedback}%</ItemList>
    </StatisticsList>
    :
    children
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
  children: PropTypes.object.isRequired,
};

export default Statistics;