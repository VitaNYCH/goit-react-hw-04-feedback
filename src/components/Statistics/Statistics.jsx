import React from 'react';
import PropTypes from 'prop-types';

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
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
