import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorButtons extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.objectChange.bind(this);
  }

  objectChange() {
    const { label, change } = this.props;
    change(label);
  }

  render() {
    const { label, clName } = this.props;
    return <button className={`${clName}`} type="submit" onClick={this.onClick}>{ label }</button>;
  }
}

CalculatorButtons.propTypes = {
  label: PropTypes.string.isRequired,
  clName: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default CalculatorButtons;
