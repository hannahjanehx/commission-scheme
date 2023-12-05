import React from 'react';
import '../styles/widget.css';
import Table from './table';
import Input from './input';
import Chart from './chart';
import Container from './container';

interface WidgetProps {
    title: string;
}

function Widget({title}: WidgetProps) {
  
  // hard coded for set up of how it will look
  const revenue = 1850;

  return (
    <div className="Widget">
      <header className="Widget-header">
        {title}
      </header>
      <div className='Widget-container'>
        <Container 
            text="Please enter a value:"
            childOne={<Input />}
            childTwo={<Table />}
        />
        <Container 
            text="Total commission:"
            childOne={<p>£{revenue}</p>}
            childTwo={<Chart />}
        />
      </div>
    </div>
  );
}

export default Widget;
