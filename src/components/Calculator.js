import React, { useState } from 'react';
import CalculatorButtons from './calculatorButtons';
import calculate from '../logic/calculate';
import './style.css';

function Calculator() {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [display, setDisplay] = useState('');

  const objectChange = (btn) => {
    const newObj = calculate(obj, btn);
    setObj(newObj);

    if (btn === '=') {
      setDisplay(newObj.total);
    } else if (btn === 'AC') {
      setDisplay('');
    } else {
      setDisplay(display + btn);
    }
  };

  return (
    <div className="calculator">
      <div className="display p-3"><h2 id="display">{display}</h2></div>
      <div className="all-button">
        <CalculatorButtons label="AC" clName="white-background" change={objectChange} />
        <CalculatorButtons label="+/-" clName="white-background" change={objectChange} />
        <CalculatorButtons label="%" clName="white-background" change={objectChange} />
        <CalculatorButtons label="+" clName="white-background" change={objectChange} />
        <CalculatorButtons label="7" clName="white-background" change={objectChange} />
        <CalculatorButtons label="8" clName="white-background" change={objectChange} />
        <CalculatorButtons label="9" clName="white-background" change={objectChange} />
        <CalculatorButtons label="x" clName="orange-background" change={objectChange} />
        <CalculatorButtons label="4" clName="white-background" change={objectChange} />
        <CalculatorButtons label="5" clName="white-background" change={objectChange} />
        <CalculatorButtons label="6" clName="white-background" change={objectChange} />
        <CalculatorButtons label="-" clName="orange-background" change={objectChange} />
        <CalculatorButtons label="1" clName="white-background" change={objectChange} />
        <CalculatorButtons label="2" clName="white-background" change={objectChange} />
        <CalculatorButtons label="3" clName="white-background" change={objectChange} />
        <CalculatorButtons label="+" clName="orange-background" change={objectChange} />
        <CalculatorButtons label="0" clName="white-background0" change={objectChange} />
        <CalculatorButtons label="." clName="white-background" change={objectChange} />
        <CalculatorButtons label="=" clName="orange-background" change={objectChange} />
      </div>
    </div>
  );
}

export default Calculator;
