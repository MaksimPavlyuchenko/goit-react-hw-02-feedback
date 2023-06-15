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

  handleClick = item => {
    this.setState(prevState => {
      return { [item]: prevState[item] + 1 };
    });
  };
  countTotalFeedback = () => {
    const totalCount = Object.values(this.state).reduce((total, number) => {
      return total + number;
    }, 0);
    return totalCount;
  };
  countPositiveFeedbackPercentage = () => {
    const positivePercents =
      ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0) || 0;

    return positivePercents;
  };
  render() {
    const { bad, good, neutral } = this.state;
    const options = Object.keys(this.state);

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
            options={options}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
export default App;
