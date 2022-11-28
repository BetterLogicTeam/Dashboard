import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales for 2022',
        data: [2, 3, 7, 5, 8]
      }
    ]
  }
  return 
      <Line data={data} />
}

export default LineChart