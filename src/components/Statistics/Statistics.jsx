import { Statistic, CountItem } from './Statistics.styled';
import Notification from '../Notification/Notification';


export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  
  return (
    <>
      <Statistic>Statistics:</Statistic>
      {good === 0 && neutral === 0 && bad === 0 ? (
       <Notification message="There is no feedback"/>
      ) : (
        <>
          <CountItem>Good: {good}</CountItem>
          <CountItem>Neutral: {neutral}</CountItem>
          <CountItem>Bad: {bad}</CountItem>
          <CountItem>Total: {total()}</CountItem>
          <CountItem>
            Positive feedback:{' '}
            {positivePercentage() === 'NaN' ? '0' : positivePercentage()}%
          </CountItem>
        </>
      )}
    </>
  );
};
export default Statistics;
