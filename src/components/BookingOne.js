import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from 'react-i18next';

export default function BookingOne() {
    const [floor, setFloor] = React.useState(window.localStorage.getItem('floor') || '');
    const handleFloorChange = (event) => {
        setFloor(event.target.value);
        window.localStorage.setItem('floor', event.target.value);
      };

    const [person, setPerson] = React.useState(window.localStorage.getItem('person') || '');
    const handlePersonChange = (event) => {
        setPerson(event.target.value);
        window.localStorage.setItem('person', event.target.value);
    };

    const [checkin, setCheckin] = React.useState(window.localStorage.getItem('checkin') || null);
    const [checkout, setCheckout] = React.useState(window.localStorage.getItem('checkout') || null);

    const { t } = useTranslation();
    return (
        <div>
            <FormControl fullWidth className='mb-4'>
                <InputLabel id="demo-simple-select-label">{t('floors')}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={floor}
                    label={t('floors')}
                    onChange={handleFloorChange}
                >
                    <MenuItem value={1}>{t('floors')} 1</MenuItem>
                    <MenuItem value={2}>{t('floors')} 2</MenuItem>
                    <MenuItem value={3}>{t('floors')} 3</MenuItem>
                    <MenuItem value={4}>{t('floors')} 4</MenuItem>
                    <MenuItem value={5}>{t('floors')} 5</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth className='mb-4'>
                <InputLabel id="demo-simple-select-label">{t('person')}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={person}
                    label={t('person')}
                    onChange={handlePersonChange}
                >
                    <MenuItem value={1}>1 {t('person')}</MenuItem>
                    <MenuItem value={2}>2 {t('person')}</MenuItem>
                    <MenuItem value={3}>3 {t('person')}</MenuItem>
                    <MenuItem value={4}>4 {t('person')}</MenuItem>
                    <MenuItem value={5}>5 {t('person')}</MenuItem>
                </Select>
            </FormControl>

            <div className='d-flex'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label={t('checkin')}
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
                        label={t('checkout')}
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