import React, { useState } from 'react';
import '../App.css';

function Input() {

    const [inputValue, setInputValue] = useState<number | string>(0);

    const validator = (event: React.ChangeEvent<HTMLInputElement>) => {
        // this is a commissions test, we only want it to be above 0 and it is a price so only 2dp
        const regex = new RegExp(/^([0-9]+\.?([0-9]{0,2})?)?$/);
        const input = event.target.value;

        if(regex.test(input)) {
            setInputValue(input);
        }
    }

    return (
        <input type='text' pattern='^([0-9]+\.?([0-9]{0,2})?)?$' onChange={validator} value={inputValue}></input>
    );
}

export default Input;
