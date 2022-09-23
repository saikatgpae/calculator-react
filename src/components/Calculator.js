import React from 'react';
import CalculatorButtons from './calculatorButtons';
import './style.css';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.objectChange = this.modifyObject.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
      display: '',
    };
  }

  modifyObject(btn) {
    const { obj } = this.state;
    const newObj = calculate(obj, btn);
    this.setState(() => ({
      obj: newObj,
    }));
    if (btn === '=') {
      this.setState(() => ({
        display: newObj.total,
      }));
    } else if (btn === 'AC') {
      this.setState(() => ({
        display: '',
      }));
    } else {
      this.setState((state) => ({
        display: state.display + btn,
      }));
    }
  }

  render() {
    const { display } = this.state;
    return (
      <div className="calculator">
        <div className="display p-3"><h2 id="display">{display}</h2></div>
        <div className="all-button">
          <CalculatorButtons label="AC" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="+/-" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="%" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="+" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="7" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="8" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="9" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="x" clName="orange-background" change={this.objectChange} />
          <CalculatorButtons label="4" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="5" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="6" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="-" clName="orange-background" change={this.objectChange} />
          <CalculatorButtons label="1" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="2" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="3" clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="+" clName="orange-background" change={this.objectChange} />
          <CalculatorButtons label="0" clName="white-background0" change={this.objectChange} />
          <CalculatorButtons label="." clName="white-background" change={this.objectChange} />
          <CalculatorButtons label="=" clName="orange-background" change={this.objectChange} />
        </div>
      </div>
    );
  }
}

export default Calculator;
