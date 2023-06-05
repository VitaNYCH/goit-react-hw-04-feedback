import React from 'react';
import PropTypes from 'prop-types';
import { NotificationSection } from './Notification.styled';

export const Notification = ({ text }) => {
  return <NotificationSection>{text}</NotificationSection>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
