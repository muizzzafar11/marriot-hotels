import * as React from 'react';

export default function BookingTwo() {
    return (
        <div>
           <h1 className='text-center'>Personal Information</h1>
            <div className='mt-5'>
                <input type="text" onInput={e => {window.localStorage.setItem('Name', e.target.value)}} aria-label="Name" placeholder="Name" className="form-control px-4 py-3 mt-3"></input>
                <input type="text" onInput={e => {window.localStorage.setItem('Email', e.target.value)}} aria-label="Email" placeholder="Email" className="form-control px-4 py-3 mt-3"></input>
                <input type="text" onInput={e => {window.localStorage.setItem('Phone', e.target.value)}} aria-label="Phone Number" placeholder="Phone Number" className="form-control px-4 py-3 mt-3"></input>
            </div>
        </div>
    );
}