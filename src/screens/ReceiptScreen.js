import * as React from 'react';
import homeImage from '../assets/home-image.png'

export default function ReceiptScreen() {
    const roomInfo = JSON.parse(window.localStorage.getItem('selectedRoom'))
    const checkin = new Date(window.localStorage.getItem('checkin'))
    const checkout = new Date(window.localStorage.getItem('checkout'))
    const person = JSON.parse(window.localStorage.getItem('person'))
    const [renderDiv, setRenderDiv] = React.useState(<div></div>);
    const [showButton, setShowButton] = React.useState(true);

    return (
        <div className='page-body'>
            <h1 className='text-center mb-2'>Booking Confirmation</h1>
            <img className='img-fluid' src={homeImage}/>
            <h4>{roomInfo.name}</h4>
            <h4>{roomInfo.price}</h4>
            <div className='row w-100 d-flex justify-content-between'>
                <div className='col-6'>
                    <h5>{checkin.toLocaleDateString("en-US", { weekday: 'long' })}</h5>
                    <h5>{checkin.getDate()} {checkin.toLocaleString("en-US", { month: 'long' })}, {checkin.getFullYear()}</h5>
                    <h5>Check-in at 12 pm</h5>
                </div>
                <div className='col-6 text-right'>
                    <h5>{checkout.toLocaleDateString("en-US", { weekday: 'long' })}</h5>
                    <h5>{checkout.getDate()} {checkout.toLocaleString("en-US", { month: 'long' })}, {checkout.getFullYear()}</h5>
                    <h5>check-out at 12 pm</h5>
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

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

function ShowFullDetails(details) {
    const roomInfo = parseInt(details.roomInfo.price) + parseInt(details.roomInfo.price)*0.13
    // 
    return (
        <div className='row'>
            <div className='col-4'>
                Address: <br/>
                123 Testing Street<br/>
                Ottawa, ON<br/>
                6ES T1234<br/>
                <br/>
                {details.person} total guests<br/>
                <br/>
                Total: {roomInfo} <br/>
            </div>
            <div className='col-8'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22403.561351161643!2d-75.71638233114899!3d45.420526812412795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce045503d34711%3A0x10cf2cdea88033d1!2sDowntown%2C%20Ottawa%2C%20ON!5e0!3m2!1sen!2sca!4v1656590481590!5m2!1sen!2sca" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}