import * as React from 'react';
import RoomCards from '../components/RoomCards';

export default function RoomsBookingScreen() {
    return (
        <div>
            <h1 className='text-center pt-4'>Available suites and rooms</h1>
            <div className='page-body'>
                <RoomCards/>
            </div>
        </div>
    );
}