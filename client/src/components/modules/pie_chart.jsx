
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Pie_chart = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <PieChart
          data={[
            { title: 'Item 1', value: 10, color: '#E38627' },
            { title: 'Item 2', value: 15, color: '#C13C37' },
            { title: 'Item 3', value: 20, color: '#6A2135' },
            { title: 'Item 4', value: 20, color: '#C0D904' },
          ]}
          radius={42}
          lineWidth={60}
          segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
          segmentsShift={(index) => (index === 0 ? 6 : 1.5)}
          animate
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
          labelStyle={{ fontSize: '5px', fontFamily: 'sans-serif' }}
          labelPosition={60}
        />
        <div style={{ position: 'absolute' }}>
          <h1 style={{ fontSize: '14px', margin: '0' , color: '#ff0000', fontWeight: '900'}}>$85.50</h1>
          <p style={{ fontSize: '14px', margin: '0', color: '#ffffff', fontWeight: '900' }}>Received</p>
        </div>
      </div>
      );
}

export default Pie_chart


