import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function BookingTwo() {
    const { t } = useTranslation();
    return (
        <div>
           <h1 className='text-center'>{t('personal_information')}</h1>
            <div className='mt-5'>
                <input type="text" onInput={e => {window.localStorage.setItem('Name', e.target.value)}} aria-label="Name" placeholder={t('name')} className="form-control px-4 py-3 mt-3" value={window.localStorage.getItem('Name') || undefined}></input>
                <input type="text" onInput={e => {window.localStorage.setItem('Email', e.target.value)}} aria-label="Email" placeholder={t('email')} className="form-control px-4 py-3 mt-3" value={window.localStorage.getItem('Email') || undefined}></input>
                <input type="text" onInput={e => {window.localStorage.setItem('Phone', e.target.value)}} aria-label="Phone Number" placeholder={t('phone')} className="form-control px-4 py-3 mt-3" value={window.localStorage.getItem('Phone') || undefined}></input>
            </div>
        </div>
    );
}