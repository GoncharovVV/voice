import React from 'react';
import CheckBox from '../CheckBox';
export interface DetailsCheckBoxProps {
  item: any;
  id: any;
  idx: any;
  name: string;
  handleOnChange: (value: string, name: string) => void;
}

const DetailsCheckBox: React.FC<DetailsCheckBoxProps> = ({
  item,
  id,
  idx,
  name,
  handleOnChange
}) => {
  return (
    <CheckBox
      value={item || item.text}
      label={item || item.text}
      id={`${id}${idx}`}
      name={name || idx.toString()}
      handleOnChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleOnChange(event.target.value, name)
      }
    >
      {typeof item !== 'string' && (
        <a className="link" href={item.link}>
          {item.linkText}
        </a>
      )}
    </CheckBox>
  );
};

export default DetailsCheckBox;
