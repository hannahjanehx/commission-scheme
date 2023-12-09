import React, { useState } from 'react';
import '../App.css';
import { useWidgetContext } from './widget';

function Input() {

    const { value, updateValue } = useWidgetContext(); 

    const validator = (event: React.ChangeEvent<HTMLInputElement>) => {
        // this is a commissions test, we only want it to be above 0 and it is a price so only 2dp
        const regex = new RegExp(/^([0-9]+\.?([0-9]{0,2})?)?$/);
        const input = event.target.value;

        if(regex.test(input)) {
            updateValue(Number(input));
        }
    }

    return (
        <input type='text' pattern='^([0-9]+\.?([0-9]{0,2})?)?$' onChange={validator} value={value}></input>
    );
}

export default Input;
