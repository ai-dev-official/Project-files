import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const PieChartComponent = ({ userId }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/metrics/${userId}`);
        if (!response.ok) {
          throw new Error('Error fetching metrics.');
        }
        const result = await response.json();
        setData(result);

        const sum = result.reduce((acc, cur) => acc + cur.value, 0);
        setTotal(sum.toFixed(2));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  const pieChartData = data.map((item) => ({
    title: item.title,
    value: item.value,
    color: item.color,
  }));

  // Define a custom tooltip component
  const CustomTooltip = ({ data, dataIndex }) => (
    <div
      style={{
        background: 'white',
        padding: '5px',
        border: '1px solid black',
        width: '120px',
        height: '80px',
        transform: 'rotate(45deg)',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)',
      }}
    >
      <p
        style={{
          transform: 'rotate(-45deg)',
          textAlign: 'center',
          textAnchor: 'middle',
          margin: '30px auto',
        }}
      >
        <strong>{data[dataIndex].Math.round(data.percentage) + '%' } </strong>
      </p>
      <p
        style={{
          transform: 'rotate(-45deg)',
          textAlign: 'center',
          textAnchor: 'middle',
          margin: '-10px auto',
        }}
      >
        ${data[dataIndex].value}
      </p>
    </div>
  );

  return (
    <div className="piechart">
      <PieChart
        data={pieChartData}
        radius={42}
        lineWidth={60}
        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
        segmentsShift={(index) => (index === 0 ? 6 : 1.5)}
        animate
        // label={({ dataEntry }) => dataEntry.title + '\n' + Math.round(dataEntry.percentage) + '%'}
        label={({ dataEntry }) =>dataEntry.title}
        labelStyle={{
          fontSize: '8px',
          fontFamily: 'poppins',
          textAlign: 'center',
          textAnchor: 'middle',
          color: 'white'
        }}
        labelPosition={80}
        tooltip={({ data, dataIndex }) => (
          <CustomTooltip data={data} dataIndex={dataIndex} />
        )}
      />
      <div className="pie_chart">
        <h1 className="central">
          ${total}
        </h1>
        <p className="central_label">
          Expenditure
        </p>
      </div>
    </div>
  );
};

export default PieChartComponent;
