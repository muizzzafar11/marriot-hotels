import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BookingOne() {
    const [floor, setFloor] = React.useState('');
    const handleFloorChange = (event) => {
        setFloor(event.target.value);
        window.localStorage.setItem('floor', event.target.value);
      };

    const [person, setPerson] = React.useState('');
    const handlePersonChange = (event) => {
        setPerson(event.target.value);
        window.localStorage.setItem('person', event.target.value);
    };

    const [value, setValue] = React.useState([null, null]);

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Floors</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={floor}
                    label="Floors"
                    onChange={handleFloorChange}
                >
                    <MenuItem value={1}>Floor 1</MenuItem>
                    <MenuItem value={2}>Floor 2</MenuItem>
                    <MenuItem value={3}>Floor 3</MenuItem>
                    <MenuItem value={4}>Floor 4</MenuItem>
                    <MenuItem value={5}>Floor 5</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Person</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={person}
                    label="Person"
                    onChange={handlePersonChange}
                >
                    <MenuItem value={1}>1 Person</MenuItem>
                    <MenuItem value={2}>2 Person</MenuItem>
                    <MenuItem value={3}>3 Person</MenuItem>
                    <MenuItem value={4}>4 Person</MenuItem>
                    <MenuItem value={5}>5 Person</MenuItem>
                </Select>
            </FormControl>
            
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                localeText={{ start: 'Check-in', end: 'Check-out' }}
            >
                <DateRangePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    window.localStorage.setItem('checkin', newValue[0]);
                    window.localStorage.setItem('checkout', newValue[1]);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                    </React.Fragment>
                )}
                />
            </LocalizationProvider>
        </div>
    );
}