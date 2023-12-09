import React, { useState, useEffect, createContext, useContext } from 'react';
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
  commissionValue: number;
  updateValue:(updatedValue: number) => void;
  updateCommissionValue:(updatedValue: number) => void;
}


export const context = createContext<ContextType>({
  value: 0,
  commissionValue: 0,
  updateValue: () => {},
  updateCommissionValue: () => {}
});

export const useWidgetContext = () => useContext(context);

function Widget({title}: WidgetProps) {

  // create a useState to hold the commission data
  const [commissionDataTable, setCommissionDataTable] = useState<commissionData[]>([]);
  const [inputValue, setInputValue] = useState<number>(0);
  const [commissionValue, setCommissionValue] = useState<number>(0);

  // in this example, we only need it to load the commission bqands data on loading
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

  return (
    <context.Provider value={{value: inputValue, updateValue: setInputValue, commissionValue: commissionValue, updateCommissionValue: setCommissionValue}}>
        <div className="Widget">
          <header className="Widget-header">
            {title}
          </header>
          <div className='Widget-container'>
            <Container 
                text="Please enter a value:"
                childOne={<Input />}
                childTwo={<Table commissionsData={commissionDataTable} />}
            />
            <Container 
                text="Total commission:"
                childOne={<p>£{commissionValue}</p>}
                childTwo={<Chart />}
            />
          </div>
        </div>
    </context.Provider>
  );
}

export default Widget;
