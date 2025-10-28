import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector() {
  const [importance, setImportance] = React.useState('');

  const handleChange = (event) => {
    setImportance(event.target.value);
  };

  return (
    <div>
      <FormControl required sx={{ m: 1, minWidth: 120, marginTop: '25px'}}>
        {/* <InputLabel id="demo-simple-select-required-label" sx={{fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Importance</InputLabel> */}
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={importance}
          label="Importance"
          onChange={handleChange}
        >
          <MenuItem value={10}>High</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>Low</MenuItem>
        </Select>
        {/* <FormHelperText>Required</FormHelperText> */}
      </FormControl>
    </div>
  );
}