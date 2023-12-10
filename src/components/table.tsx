import '../App.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { commissionCalculatedData } from './widget';

type tableProps = {
  commissionsData: commissionCalculatedData[]
}

export type tableRow = {
  id: number;
  percentage: string;
  receivingOn: string;
  commission: string;
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
  
  return (
    <div className="Table">
      <DataGrid 
          columns={columns} 
          rows={commissionsData}/>
    </div>
  );
}

export default Table;
