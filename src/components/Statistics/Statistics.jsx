import { Statistic, CountItem } from './Statistics.styled';


export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
},children) => {
  return (
    <>
      <Statistic>Statistics:</Statistic>
      {good === 0 && neutral === 0 && bad === 0 ? (
        'No feedback given'
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
