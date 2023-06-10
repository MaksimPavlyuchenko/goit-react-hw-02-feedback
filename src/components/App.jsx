import { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { FeedbackOptions } from './Buttons/FeedbackOptions';

class App extends Component {
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
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {' '}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
export default App;
