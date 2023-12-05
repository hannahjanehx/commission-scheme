import React from 'react';
import '../App.css';
import { BarChart } from '@mui/x-charts/BarChart';

// chart imports used are currently throwing errors that mismatch their docs - working for what i need at this moment
function Chart() {

  // hard-coded data for skeleton purposes
  const data: number[] = [500, 750, 600, 0];

  return (
    <>
      <p>How much commission was made in each band break</p>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['10%', '15%', '20%', '25%'],
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: data,
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
}

export default Chart;
