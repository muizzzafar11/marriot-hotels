import * as React from 'react';
import { useTranslation } from 'react-i18next';
import RoomCards from '../components/RoomCards';

export default function RoomsBookingScreen() {
    const { t } = useTranslation();
    return (
        <div>
            <h1 className='text-center pt-4'>{t('rooms_heading')}</h1>
            <div className='page-body'>
                <RoomCards/>
            </div>
        </div>
    );
}