import * as React from 'react';
import './App.css';

interface CalcButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  buttonText: string | number;
  type?: any;
}

const NumberInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = props => {
  return <input className="calc-input" {...props} />;
};

const CalcButton: React.FC<CalcButtonProps> = ({
  buttonText,
  onChange,
  ...rest
}) => {
  return (
    <button {...rest} className="calc-button" name={buttonText.toString()}>
      {buttonText}
    </button>
  );
};

const App: React.FC<{}> = () => {
  const [total, setTotal] = React.useState(0);
  const [displayNumber, setDisplayNumber] = React.useState(0);

  const handleButtonClick = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log('event.currentTarget.name: ' + event.currentTarget.name);
    switch (event.currentTarget.name) {
      case 'C':
        setDisplayNumber(0);
        setTotal(0);
        break;
      case '=':
        setTotal(total + displayNumber);
        setDisplayNumber(total + displayNumber);
        break;
      case '+':
        setTotal(total + displayNumber);
        setDisplayNumber(total + displayNumber);
        break;
      case '-':
        setTotal(total - displayNumber);
        setDisplayNumber(total - displayNumber);
        break;
      default:
        setDisplayNumber(parseInt(event.currentTarget.name));
    }
  };

  return (
    <div className="calc-wrapper">
      <NumberInput value={displayNumber} readOnly={true} />
      <div className="number-buttons">
        <CalcButton buttonText={1} onClick={handleButtonClick} />
        <CalcButton buttonText={2} onClick={handleButtonClick} />
        <CalcButton buttonText={3} onClick={handleButtonClick} />
        <CalcButton buttonText={4} onClick={handleButtonClick} />
        <CalcButton buttonText={5} onClick={handleButtonClick} />
        <CalcButton buttonText={6} onClick={handleButtonClick} />
        <CalcButton buttonText={7} onClick={handleButtonClick} />
        <CalcButton buttonText={8} onClick={handleButtonClick} />
        <CalcButton buttonText={9} onClick={handleButtonClick} />
        <CalcButton buttonText={0} onClick={handleButtonClick} />
      </div>
      <div className="output-buttons">
        <CalcButton buttonText="C" onClick={handleButtonClick} />
        <CalcButton buttonText="+" onClick={handleButtonClick} />
        <CalcButton buttonText="-" onClick={handleButtonClick} />
        <CalcButton buttonText="=" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;
