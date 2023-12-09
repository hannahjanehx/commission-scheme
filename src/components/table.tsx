import React, { useEffect } from 'react';
import '../App.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { commissionData, useWidgetContext } from './widget';

type tableProps = {
  commissionsData: commissionData[]
}

type tableRow = {
  id: number;
  percentage: string;
  receivingOn: number|null;
  commission: number|null;
}

function Table({commissionsData}: tableProps) {

  const context = useWidgetContext();

  const workoutCommission = (figure: number, percentage: number) => {
    return (figure / 100) * percentage;
  }

  // this is setting the header
  const columns: GridColDef[] = [
    { 
      field: 'percentage', 
      headerName: 'Band', 
      width: 90 
    },
    {
      field: 'receivingOn',
      headerName: 'Break',
      description: 'How much of your revenue is in this band break',
      width: 150,
    },
    {
      field: 'commission',
      headerName: 'Commission',
      description: 'How much of your commission did you make in this band break',
      width: 150,
    }
  ];

  let inputValue = context.value;
  let bandBreak: number|null = 0;
  let commission: number = 0;
  let totalCommission = 0;
  let rows: tableRow[] = [];

  useEffect(() => {
    context.updateCommissionValue(Math.round((totalCommission + Number.EPSILON) * 100) / 100)
  }, [context.value]);

  commissionsData.forEach(data => {
    bandBreak = 0;
    commission = 0;

    if(data.upperBound == null) {
      bandBreak = inputValue;
      commission = workoutCommission(bandBreak, data.commissionRate);
    }
    else {
      const breakBand = data.upperBound - data.lowerBound;
      if(inputValue >= breakBand) {
        inputValue -= breakBand;
        bandBreak = breakBand;
        commission = workoutCommission(bandBreak, data.commissionRate);
      } else {
        bandBreak = inputValue;
        commission = workoutCommission(bandBreak, data.commissionRate);
        inputValue = 0;
      }
    }

    const row:tableRow = {
      id: data.id,
      percentage: data.commissionRate + '%',
      receivingOn: Math.round((bandBreak + Number.EPSILON) * 100) / 100,
      commission: Math.round((commission + Number.EPSILON) * 100) / 100
    }
    totalCommission += commission;
    rows.push(row);
  });
  
  return (
    <div className="Table">
      <DataGrid 
          columns={columns} 
          rows={rows}/>
    </div>
  );
}

export default Table;
