import PropTypes from 'prop-types';
import './calculator.css';

function Button(props) {
  const { digit, className } = props;
  return (
    <button type="button" className={className}>
      {digit}
    </button>
  );
}

Button.propTypes = {
  digit: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

function Calculator() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">1234+</div>
        <div className="current-operand">1234</div>
      </div>
      <Button type="button" digit="AC" />
      <Button type="button" digit="+/-" />
      <Button type="button" digit="%" />
      <Button type="button" digit="÷" className="colored" />
      <Button type="button" digit="7" />
      <Button type="button" digit="8" />
      <Button type="button" digit="9" />
      <Button type="button" digit="×" className="colored" />
      <Button type="button" digit="4" />
      <Button type="button" digit="5" />
      <Button type="button" digit="6" />
      <Button type="button" digit="-" className="colored" />
      <Button type="button" digit="1" />
      <Button type="button" digit="2" />
      <Button type="button" digit="3" />
      <Button type="button" digit="+" className="colored" />
      <Button type="button" digit="0" className="span-two" />
      <Button type="button" digit="." />
      <Button type="button" digit="=" className="colored" />
    </div>
  );
}

export default Calculator;
