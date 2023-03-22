import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './calculator.css';
import Big from 'big.js';
import operate from '../logic/operate';

function Button(props) {
  const { digit, className, handleClick } = props;
  return (
    <button
      type="button"
      className={className}
      onClick={() => handleClick(digit)}
    >
      {digit}
    </button>
  );
}

Button.propTypes = {
  digit: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

function Calculator() {
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('0');
  const [operation, setOperation] = useState('');

  const handleDigitClick = (digit) => {
    if (digit === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && digit !== '.') {
      setCurrentOperand(digit);
    } else {
      setCurrentOperand(currentOperand + digit);
    }
  };

  const handleOperationClick = (operation) => {
    if (previousOperand === '') {
      setPreviousOperand(currentOperand);
      setCurrentOperand('0');
      setOperation(operation);
    } else {
      const result = operate(previousOperand, currentOperand, operation);
      setPreviousOperand(result);
      setCurrentOperand('0');
      setOperation(operation);
    }
  };

  const handleEqualsClick = () => {
    const result = operate(previousOperand, currentOperand, operation);
    setPreviousOperand('');
    setCurrentOperand(result);
    setOperation('');
  };

  const handleAllClearClick = () => {
    setPreviousOperand('');
    setCurrentOperand('0');
    setOperation('');
  };

  const handleNegateClick = () => {
    setCurrentOperand(Big(currentOperand).times(-1).toString());
  };

  const handlePercentageClick = () => {
    setCurrentOperand(Big(currentOperand).div(100).toString());
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <Button type="button" digit="AC" handleClick={handleAllClearClick} />
      <Button type="button" digit="+/-" handleClick={handleNegateClick} />
      <Button type="button" digit="%" handleClick={handlePercentageClick} />
      <Button
        type="button"
        digit="÷"
        className="colored"
        handleClick={handleOperationClick}
      />
      <Button type="button" digit="7" handleClick={handleDigitClick} />
      <Button type="button" digit="8" handleClick={handleDigitClick} />
      <Button type="button" digit="9" handleClick={handleDigitClick} />
      <Button
        type="button"
        digit="x"
        className="colored"
        handleClick={handleOperationClick}
      />
      <Button type="button" digit="4" handleClick={handleDigitClick} />
      <Button type="button" digit="5" handleClick={handleDigitClick} />
      <Button type="button" digit="6" handleClick={handleDigitClick} />
      <Button
        type="button"
        digit="-"
        className="colored"
        handleClick={handleOperationClick}
      />
      <Button type="button" digit="1" handleClick={handleDigitClick} />
      <Button type="button" digit="2" handleClick={handleDigitClick} />
      <Button type="button" digit="3" handleClick={handleDigitClick} />
      <Button
        type="button"
        digit="+"
        className="colored"
        handleClick={handleOperationClick}
      />
      <Button
        type="button"
        digit="0"
        className="span-two"
        handleClick={handleDigitClick}
      />
      <Button type="button" digit="." handleClick={handleDigitClick} />
      <Button
        type="button"
        digit="="
        className="colored"
        handleClick={handleEqualsClick}
      />
    </div>
  );
}

export default Calculator;
