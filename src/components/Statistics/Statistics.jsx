import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification';
import {
  StatisticsSection,
  StatisticsList,
  StatisticsItem,
  StatisticsValue,
} from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total > 0) {
    return (
      <StatisticsSection>
        <StatisticsList>
          <StatisticsItem>
            Good:<StatisticsValue>{good}</StatisticsValue>{' '}
          </StatisticsItem>
          <StatisticsItem>
            Neutral:<StatisticsValue>{neutral}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>
            Bad:<StatisticsValue>{bad}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>
            Total:<StatisticsValue>{total}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>
            Positive feedback:
            <StatisticsValue>{positivePercentage}%</StatisticsValue>
          </StatisticsItem>
        </StatisticsList>
      </StatisticsSection>
    );
  }
  return <Notification text="There is no feedback" />;
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
