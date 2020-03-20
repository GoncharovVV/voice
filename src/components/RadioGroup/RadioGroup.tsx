import React, { ChangeEvent } from 'react';
import RadioButton from '../Auth/RadioButton';
export interface RadioGroupProps {
  title?: string;
  items: any[];
  name: string;
  handleValue: (value: string, name: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ title, items, name, handleValue }) => {
  return (
    <div className="form__row">
      {!!title && <p className="form__label">{title}</p>}
      {items.length > 0 &&
        items.map((item: any, idx: number) => {
          return (
            <RadioButton
              handleOnchange={(event: ChangeEvent<HTMLInputElement>) => handleValue(event.target.value, name)}
              value={(typeof item === 'string') ? item : item.value}
              label={(typeof item === 'string') ? item : item.text}
              id={`${name}${idx}`}
              key={`${name}${idx}`}
              name={name}
            />
          );
        })}
    </div>
  );
};

export default RadioGroup;
