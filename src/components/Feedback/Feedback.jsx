import { Component } from 'react';
import {
  Header,
  ButtonBox,
  Button,
  CountItem,
  Statistic,
} from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const TotalCount = Object.values(this.state).reduce((total, number) => {
      return total + number;
    }, 0);
    return TotalCount;
  };
  countPositiveFeedbackPercentage = () => {
    const PositivePercents = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(0);

    return PositivePercents;
  };

  render() {
    return (
      <div>
        <Header>Please leave feedback</Header>
        <ButtonBox>
          <Button type="button" onClick={this.handleClick} name="good">
            Good
          </Button>
          <Button type="button" onClick={this.handleClick} name="neutral">
            Neutral
          </Button>
          <Button type="button" onClick={this.handleClick} name="bad">
            Bad
          </Button>
        </ButtonBox>
        <Statistic>Statistics:</Statistic>
        <CountItem>Good: {this.state.good}</CountItem>
        <CountItem>Neutral: {this.state.neutral}</CountItem>
        <CountItem>Bad: {this.state.bad}</CountItem>
        <CountItem>Total: {this.countTotalFeedback()}</CountItem>
        <CountItem>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </CountItem>
      </div>
    );
  }
}
export default Feedback;
