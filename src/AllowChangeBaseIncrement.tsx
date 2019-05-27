import * as React from 'react';
import './Increment.css';

interface IncButtonProps {
  value: number;
  className?: string;
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    const fixEmpty = value === '' ? '0' : value;
    const numValue = parseInt(fixEmpty);
    if (!isFinite(numValue)) return;

    setTotal(numValue);
  };

  return (
    <div className="inc-wrapper">
      <input
        value={total}
        onChange={e => handleChange(e)}
        className="inc-input"
      />
      <div className="number-buttons">
        <IncButton value={1} onClick={handleButtonClick} />
        <IncButton value={5} onClick={handleButtonClick} />
        <IncButton value={-1} onClick={handleButtonClick} />
        <IncButton value={-5} onClick={handleButtonClick} />
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
