// src/components/TimeframeSelector.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TimeframeSelector = ({ onSelect }) => (
  <div>
    <Button onClick={() => onSelect('daily')}>Daily</Button>
    <Button onClick={() => onSelect('weekly')}>Weekly</Button>
    <Button onClick={() => onSelect('monthly')}>Monthly</Button>
  </div>
);

export default TimeframeSelector;
