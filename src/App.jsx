import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chart from './component/Chart';
import TimeframeSelector from './component/TimeframeSelector';
import chartData from './data/chartData.json';

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState('daily');

  useEffect(() => {
    const filterData = () => {
      const now = new Date();
      let filteredData = [];

      if (timeframe === 'daily') {
        filteredData = chartData.filter(d => new Date(d.timestamp) > new Date(now.setDate(now.getDate() - 1)));
      } else if (timeframe === 'weekly') {
        filteredData = chartData.filter(d => new Date(d.timestamp) > new Date(now.setDate(now.getDate() - 7)));
      } else if (timeframe === 'monthly') {
        filteredData = chartData.filter(d => new Date(d.timestamp) > new Date(now.setMonth(now.getMonth() - 1)));
      }

      setData(filteredData);
    };

    filterData();
  }, [timeframe]);

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <AppContainer>
      <TimeframeSelector onSelect={handleTimeframeChange} />
      <div className="chart-container">
        <Chart data={data} />
      </div>
    </AppContainer>
  );
};

export default App;
