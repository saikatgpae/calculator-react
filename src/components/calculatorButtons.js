import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorButtons extends React.Component {
  render() {
    const { label, clName } = this.props;
    return <button className={`${clName}`} type="submit">{label}</button>;
  }
}

CalculatorButtons.propTypes = {
  label: PropTypes.string.isRequired,
  clName: PropTypes.string.isRequired,
};

export default CalculatorButtons;
