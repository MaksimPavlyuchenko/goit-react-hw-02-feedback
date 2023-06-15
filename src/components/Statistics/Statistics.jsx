import PropTypes from 'prop-types';

import { Statistic, CountItem } from './Statistics.styled';
import Notification from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Statistic>Statistics:</Statistic>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <CountItem>Good: {good}</CountItem>
          <CountItem>Neutral: {neutral}</CountItem>
          <CountItem>Bad: {bad}</CountItem>
          <CountItem>Total: {total()}</CountItem>
          <CountItem>Positive feedback: {positivePercentage()}%</CountItem>
        </>
      )}
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};
