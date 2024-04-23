import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ChangeEventHandler, FC } from 'react';
import data from '../data';

type Props = {
  value: string;
  setValue: (value: string) => void;
};

const CustomSelect: FC<Props> = ({
  value,

  setValue,
}) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Categories</InputLabel>
      <Select
        value={value}
        label="Age"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onChange={handleChange}
      >
        <MenuItem value={'All'}>All</MenuItem>
        {data.map((item, index) => {
          return (
            <MenuItem value={item.category} key={item.category}>
              {item.category}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
