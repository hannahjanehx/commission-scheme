import React from 'react';
import '../App.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function Table() {

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

  // hard coded input for set up
  const rows = [
    { id:1, percentage: '0%', receivingOn: '£5000', commission: '£0' },
    { id:2, percentage: '10%', receivingOn: '£5000', commission: '£500' },
    { id:3, percentage: '15%', receivingOn: '£5000', commission: '£750' },
    { id:4, percentage: '20%', receivingOn: '£3000', commission: '£600' },
    { id:5, percentage: '25%', receivingOn: '£0', commission: '£0' }
  ];

  return (
    <div className="Table">
      <DataGrid 
          columns={columns} 
          rows={rows}/>
    </div>
  );
}

export default Table;
