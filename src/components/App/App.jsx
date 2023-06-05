import React, { Component } from 'react';
import { Container } from './App.styled';
import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';

export class App extends Component {
  state = {
    good: '',
    neutral: '',
    bad: '',
  };

  feedbackState = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  countTotalFeedback = state => {
    const { good, neutral, bad } = state;
    let total = 0;
    total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = state => {
    const { good, neutral, bad } = state;
    let percentage = 0;
    let negative = neutral + bad;
    if (negative > 0) {
      percentage = Math.round((good / (good + neutral + bad)) * 100);
      return percentage;
    }
    return (percentage = 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.feedbackState}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
      </Container>
    );
  }
}
