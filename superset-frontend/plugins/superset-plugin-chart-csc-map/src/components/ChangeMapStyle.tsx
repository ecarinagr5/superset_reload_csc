import React, { useState } from 'react';
import { typeOfView } from '../utils';
import { HeaderNav, SelectView } from '../styles';

interface IOptions {
    options: any;
    setStyleMap: any;
    defaultValue: any;
}

const ChangeMapStyle:React.FC<IOptions> = ({options, setStyleMap, defaultValue}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
    setStyleMap(typeOfView[event.target.value as keyof typeof typeOfView]);
  };

  return (
    <div>
      <SelectView id="options" value={selectedOption} onChange={handleChange}>
        <option value="">{defaultValue}</option>
        {options?.map((option: {} | null | undefined, key: React.Key | null | undefined) => (
          <option key={key} value={option?.toString()}>
            {option}
          </option>
        ))}
      </SelectView>
    </div>
  );
};

export default ChangeMapStyle;
