import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart, LinearScale, PointElement } from 'chart.js';

// Register the linear scale type and point element
Chart.register(LinearScale, PointElement);

// Generate random data for the chart
const generateData = () => {
  const data = [];
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * 25;
    const y = Math.random() * 20 + 8;
    const r = Math.random() * 15;
    data.push({ x, y, r });
  }
  return data;
};

const data = {
  datasets: [
    {
      label: 'Yellow Dots',
      data: generateData(),
      backgroundColor: 'yellow',
    },
    {
      label: 'Red Dots',
      data: generateData(),
      backgroundColor: 'red',
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      type: 'linear',
      min: 0,
      max: 25,
      title: {
        display: true,
        text: 'X axis',
      },
      grid: {
        display: true,
        color: 'rgba(0,0,0,0.1)',
        lineWidth: 1,
      },
    },
    y: {
      type: 'linear',
      min: 8,
      max: 20,
      title: {
        display: true,
        text: 'Y axis',
      },
      grid: {
        display: true,
        color: 'rgba(0,0,0,0.1)',
        lineWidth: 1,
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.dataset.label || '';
          const x = context.parsed.x;
          const y = context.parsed.y;
          return `${label}: (${x}, ${y})`;
        },
      },
    },
  },
};

export default function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>My Expenses</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Week <i className="fa fa-angle-down" />
        </div>
      </div>
      <Scatter data={data} options={options} />
    </div>
  );
}
