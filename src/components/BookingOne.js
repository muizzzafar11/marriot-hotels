import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

    const [checkin, setCheckin] = React.useState(null);
    const [checkout, setCheckout] = React.useState(null);

    return (
        <div>
            <FormControl fullWidth className='mb-4'>
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

            <FormControl fullWidth className='mb-4'>
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

            <div className='d-flex'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Checkin"
                        value={checkin}
                        shouldDisableDate={(date) => date.getTime() < Date.now()}
                        onChange={(newValue) => {
                            setCheckin(newValue);
                            window.localStorage.setItem('checkin', newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <p className='my-auto mx-3'>to</p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Checkout"
                        value={checkout}
                        shouldDisableDate={(date) => date.getTime() <= checkin || date.getTime() < Date.now()}
                        onChange={(newValue) => {
                            setCheckout(newValue);
                            window.localStorage.setItem('checkout', newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        </div>
    );
}