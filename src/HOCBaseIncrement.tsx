import * as React from 'react';
import './Increment.css';

interface IncButtonProps {
  value: number;
  onClick: (e: any) => void;
}

const IncButton: React.FC<IncButtonProps> = ({ onClick, value }) => {
  return (
    <button className="inc-button" value={value} onClick={onClick}>
      {value > 0 ? `+ ${value}` : `- ${value * -1}`}
    </button>
  );
};

const BaseIncrement: React.FC<{}> = () => {
  const [total, setTotal] = React.useState(0);

  const handleButtonClick = (event: React.ChangeEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    const numValue = parseInt(value);
    setTotal(total + numValue);
  };

  const handleClear = () => setTotal(0);

  const IncWithButtonClick: React.FC<{ value: number }> = ({ value }) => (
    <IncButton value={value} onClick={handleButtonClick} />
  );

  return (
    <div className="inc-wrapper">
      <input value={total} readOnly={true} className="inc-input" />
      <div className="number-buttons">
        <IncWithButtonClick value={1} />
        <IncWithButtonClick value={5} />
        <IncWithButtonClick value={-1} />
        <IncWithButtonClick value={-5} />
      </div>
      <div className="output-buttons">
        <button className="inc-button" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default BaseIncrement;
