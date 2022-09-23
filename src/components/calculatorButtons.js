import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorButtons extends React.Component {
  constructor(props) {
    super(props);
    this.bhandleObjectChange = this.bhandleObjectChange.bind(this);
  }

  bhandleObjectChange() {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { label, clName } = this.props;
    return <button className={clName} type="submit" onClick={this.bhandleObjectChange}>{label}</button>;
  }
}

CalculatorButtons.propTypes = {
  label: PropTypes.string.isRequired,
  clName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CalculatorButtons;
