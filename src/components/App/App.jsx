import { useState } from 'react';
import { Container } from './App.styled';
import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };
  const options = Object.keys(feedback);

  const feedbackState = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    let total = 0;
    total = good + neutral + bad;

    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    let percentage = 0;
    let negative = neutral + bad;
    if (negative > 0) {
      percentage = Math.round((good / (good + neutral + bad)) * 100);
      return percentage;
    }
    return (percentage = 100);
  };

  return (
    <Container>
      <Section title="Please leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={feedbackState} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
}
