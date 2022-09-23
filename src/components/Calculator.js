import React from 'react';
import CalculatorButtons from './CalculatorButtons.js';
import './style.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.changeObject = this.changeObject.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
      display: '',
    };
  }

  changeObject(buttn) {
    const { obj } = this.state;
    const newObj = calculate(obj, buttn);
    this.setState(() => ({
      obj: newObj,
    }));
    if (buttn === '=') {
      this.setState(() => ({
        display: newObj.total,
      }));
    } else if (buttn === 'AC') {
      this.setState(() => ({
        display: '',
      }));
    } else {
      this.setState((state) => ({
        display: state.display + buttn,
      }));
    }
  }

  render() {
    const { display } = this.state;
    return (
      <div className="calculator">
        <div className="display p-3"><h2 id="display">{display}</h2></div>
        <div className="all-button">
          <CalculatorButtons label="AC" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="+/-" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="%" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="+" clName="orange-background" onClick={this.changeObject} />
          <CalculatorButtons label="7" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="8" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="9" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="x" clName="orange-background" onClick={this.changeObject} />
          <CalculatorButtons label="4" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="5" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="6" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="-" clName="orange-background" onClick={this.changeObject} />
          <CalculatorButtons label="1" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="2" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="3" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="+" clName="orange-background" onClick={this.changeObject} />
          <CalculatorButtons label="0" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="0" clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="." clName="white-background" onClick={this.changeObject} />
          <CalculatorButtons label="=" clName="orange-background" onClick={this.changeObject} />
        </div>
      </div>
    );
  }
}

export default Calculator;
