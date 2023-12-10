import { useState, useEffect, createContext, useContext } from 'react';
import '../styles/widget.css';
import Table from './table';
import Input from './input';
import Chart from './chart';
import Container from './container';

type WidgetProps = {
    title: string;
}

export type commissionData = {
  id: number;
  name: string;
  lowerBound: number;
  upperBound: number|null;
  commissionRate: number;
}

type ContextType = {
  value: number;
  updateValue:(updatedValue: number) => void;
}

export type commissionCalculatedData = {
  id: number;
  percentage: string;
  receivingOn: number|null;
  commission: number|null;
}


export const context = createContext<ContextType>({
  value: 0,
  updateValue: () => {},
});

export const useWidgetContext = () => useContext(context);

const workoutCommission = (figure: number, percentage: number) => {
  return (figure / 100) * percentage;
}

function Widget({title}: WidgetProps) {

  // create a useState to hold the commission data
  const [commissionDataTable, setCommissionDataTable] = useState<commissionData[]>([]);
  const [inputValue, setInputValue] = useState<number>(0);
  const [commissionValue, setCommissionValue] = useState<number>(0);
  const [calculatedData, setCalculatedData] = useState<commissionCalculatedData[]>([]);

  // in this example, we only need it to load the commission bands data on loading
  // if this was an application for something like a stock market, you would have it loaded more frequently
  useEffect(() => {
    let commisionBands: { commisionBands: commissionData[]; };
    fetch("../data/mimicDatabase.json" ,
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        commisionBands = json;
      })
      .then(() => {
        setCommissionDataTable(commisionBands.commisionBands)
      });
    }, []);

    useEffect(() => {
      let value: number = inputValue;
      let bandBreak: number|null = 0;
      let commission: number = 0;
      let totalCommission = 0;
      let calculatedItems: commissionCalculatedData[] = [];

      commissionDataTable.forEach(data => {
        bandBreak = 0;
        commission = 0;

        if(data.upperBound == null) {
          bandBreak = value;
          commission = workoutCommission(bandBreak, data.commissionRate);
        }
        else {
          const breakBand = data.upperBound - data.lowerBound;
          if(value >= breakBand) {
            value -= breakBand;
            bandBreak = breakBand;
            commission = workoutCommission(bandBreak, data.commissionRate);
          } else {
            bandBreak = value;
            commission = workoutCommission(bandBreak, data.commissionRate);
            value = 0;
          }
        }

        const calculatedItem:commissionCalculatedData = {
          id: data.id,
          percentage: data.commissionRate + '%',
          receivingOn: Math.round((bandBreak + Number.EPSILON) * 100) / 100,
          commission: Math.round((commission + Number.EPSILON) * 100) / 100
        }
        totalCommission += commission;
        calculatedItems.push(calculatedItem);
      });

      setCalculatedData(calculatedItems);
      setCommissionValue(Math.round((totalCommission + Number.EPSILON) * 100) / 100);

    }, [inputValue]);

  return (
    <context.Provider value={{value: inputValue, updateValue: setInputValue}}>
        <div className="Widget">
          <header className="Widget-header">
            {title}
          </header>
          <div className='Widget-container'>
            <Container 
                text="Please enter a value:"
                childOne={<Input />}
                childTwo={<Table commissionsData={calculatedData} />}
            />
            <Container 
                text="Total commission:"
                childOne={<p>£{commissionValue}</p>}
                childTwo={<Chart commissionsData={calculatedData} />}
            />
          </div>
        </div>
    </context.Provider>
  );
}

export default Widget;
