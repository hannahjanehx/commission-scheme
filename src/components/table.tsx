import '../App.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { commissionCalculatedData } from './widget';

type tableProps = {
  commissionsData: commissionCalculatedData[]
}

type row = {
  id: number,
  percentage: string,
  receivingOn: string|null,
  commission: string|null
}

function Table({commissionsData}: tableProps) {

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

  let rows: row[] = [];
  commissionsData.forEach(data => {
    rows.push({
      id: data.id,
      percentage: data.percentage,
      receivingOn: '£' + data.receivingOn?.toFixed(2),
      commission: '£' + data.commission?.toFixed(2)
    })
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
