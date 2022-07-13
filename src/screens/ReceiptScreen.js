import * as React from 'react';
import { useTranslation } from 'react-i18next';
import homeImage from '../assets/home-image.png'
import './ReceiptScreen.css'

export default function ReceiptScreen() {
    const roomInfo = JSON.parse(window.localStorage.getItem('selectedRoom'))
    const checkin = new Date(window.localStorage.getItem('checkin'))
    const checkout = new Date(window.localStorage.getItem('checkout'))
    const person = JSON.parse(window.localStorage.getItem('person'))
    const [renderDiv, setRenderDiv] = React.useState(<div></div>);
    const [showButton, setShowButton] = React.useState(true);
    const { t } = useTranslation(); 

    return (
        <div className='page-body'>
            <h1 className='text-center mb-4'>Booking Confirmation</h1>
            <img className='img-fluid d-block w-100' style={{borderRadius: 25, height: 500, objectFit: 'cover'}} src={roomInfo.image}/>
            <h2 className='mt-4'>{t(roomInfo.name)}</h2>
            <h3>${roomInfo.price}/night</h3>
            <div className='row d-flex justify-content-between my-4'>
                <div className='col-6'>
                    <p>{checkin.toLocaleDateString("en-US", { weekday: 'long' })}</p>
                    <p>{checkin.getDate()} {checkin.toLocaleString("en-US", { month: 'long' })}, {checkin.getFullYear()}</p>
                    <p>Check-in at 12 pm</p>
                </div>
                <div className='col-6 text-end'>
                    <p>{checkout.toLocaleDateString("en-US", { weekday: 'long' })}</p>
                    <p>{checkout.getDate()} {checkout.toLocaleString("en-US", { month: 'long' })}, {checkout.getFullYear()}</p>
                    <p>check-out at 12 pm</p>
                </div>
            </div>
            {renderDiv}
            <button className='btn btn-success' onClick={() => {
                if(showButton) {
                    setRenderDiv(<ShowFullDetails person={person} roomInfo={roomInfo}/>)
                    setShowButton(false)
                } else {
                    window.location.href = '/'
                }
            }}>
                {showButton ? 'Show Full Details' : 'Back to Home'}
            </button>
        </div>
    )
}

function ShowFullDetails(details) {
    const roomInfo = parseInt(details.roomInfo.price) + parseInt(details.roomInfo.price)*0.13
    // 
    return (
        <div className='row mb-4'>
            <div className='col-12 col-md-4'>
                <p><b>Address:</b></p>
                <p>123 Testing Street</p>
                <p>Ottawa, ON</p>
                <p>6ES T1234</p>
                <p><b>Total guests: </b>{details.person}</p>
                <p className='mb-0'><b>Total Bill: </b> ${roomInfo}+HST</p>
            </div>
            <div className='map-responsive col text-end mt-3'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22403.561351161643!2d-75.71638233114899!3d45.420526812412795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce045503d34711%3A0x10cf2cdea88033d1!2sDowntown%2C%20Ottawa%2C%20ON!5e0!3m2!1sen!2sca!4v1656590481590!5m2!1sen!2sca" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}