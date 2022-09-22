import React from 'react';
import CalculatorButtons from './calculatorButtons';
import './style.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="display p-3"><h2 id="display">0</h2></div>
        <div className="all-button">
          <CalculatorButtons label="AC" clName="white-background" />
          <CalculatorButtons label="+/-" clName="white-background" />
          <CalculatorButtons label="%" clName="white-background" />
          <CalculatorButtons label="+" clName="orange-background" />
          <CalculatorButtons label="7" clName="white-background" />
          <CalculatorButtons label="8" clName="white-background" />
          <CalculatorButtons label="9" clName="white-background" />
          <CalculatorButtons label="X" clName="orange-background" />
          <CalculatorButtons label="4" clName="white-background" />
          <CalculatorButtons label="5" clName="white-background" />
          <CalculatorButtons label="6" clName="white-background" />
          <CalculatorButtons label="-" clName="orange-background" />
          <CalculatorButtons label="1" clName="white-background" />
          <CalculatorButtons label="2" clName="white-background" />
          <CalculatorButtons label="3" clName="white-background" />
          <CalculatorButtons label="+" clName="orange-background" />
          <CalculatorButtons label="0" clName="white-background" />
          <CalculatorButtons label="0" clName="white-background" />
          <CalculatorButtons label="." clName="white-background" />
          <CalculatorButtons label="=" clName="orange-background" />
        </div>
      </div>
    );
  }
}

export default Calculator;
