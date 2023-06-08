import { useState } from 'react';
import { Container } from './App.styled';
import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import { Notification } from '../Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };
  const options = Object.keys(feedback);

  const feedbackState = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <Container>
      <Section title="Please leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={feedbackState} />
      </Section>
      <Section title="Statistics">
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
        {total === 0 && <Notification text="There is no feedback" />}
      </Section>
    </Container>
  );
}
