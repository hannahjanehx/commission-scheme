import React, { useState } from 'react';
import '../styles/toggle.css';

interface ToggleProps {
    disabled: boolean;
    on: boolean;
}

function Toggle({disabled, on}: ToggleProps) {

  const [checked, setChecked] = useState(on);

  const switchToggle = () => {
    setChecked(!checked);
  }

  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={switchToggle} />
      <span className="slider round"></span>
  </label>
  );
}

export default Toggle;
