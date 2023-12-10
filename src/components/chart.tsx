import React from 'react';
import '../App.css';
import { PieChart  } from '@mui/x-charts/PieChart';
import { commissionCalculatedData } from './widget';

type chartProps = {
  commissionsData: commissionCalculatedData[]
}

// chart imports used are currently throwing errors that mismatch their docs - working for what i need at this moment
function Chart({commissionsData}: chartProps) {

  let data: any[] = [];
  commissionsData.forEach(element => {
    data.push({
      value: element.commission,
      label: element.percentage + ' Commission Band'
    })
  });

  return (
    <PieChart series={[{ data, innerRadius: 80 }]} 
      slotProps={{ legend: { hidden: true }}} 
      width={400}
      height={200}>
        <text x={115} y={100}>
          Breakdown
        </text>
    </PieChart>
  );
}

export default Chart;
