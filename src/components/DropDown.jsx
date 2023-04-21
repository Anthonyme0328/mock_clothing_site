import React, {useState} from 'react';
import {InputLabel, MenuItem, FormControl, Select} from '@mui/material';

const DropDown = () => {
  const [size, setSize] = useState('');

    const handleChange = (e) => {
    setSize(e.target.value);
  };

  return (

    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="sizeSelect">Size</InputLabel>
      <Select
        labelId="sizeSelect"
        id="sizeSelect"
        value={size}
        label="Size"
        onChange={handleChange}
      >
        <MenuItem value={1}>XS</MenuItem>
        <MenuItem value={2}>SM</MenuItem>
        <MenuItem value={3}>MD</MenuItem>
        <MenuItem value={4}>LG</MenuItem>
        <MenuItem value={5}>XL</MenuItem>
        <MenuItem value={6}>XXL</MenuItem>
      </Select>
    </FormControl>
  );
}

export default DropDown