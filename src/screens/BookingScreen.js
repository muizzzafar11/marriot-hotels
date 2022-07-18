import * as React from 'react';
import homeImage from '../assets/home-image.png'
import BookingOne from '../components/BookingOne';
import BookingTwo from '../components/BookingTwo';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

export default function BookingScreen() {
    const roomDetails = getRoomDetailsFromLocalStorage();
    const [showBookingOne, setShowBookingOne] = React.useState(true);
    const [showBookingTwo, setShowBookingTwo] = React.useState(false);
    const [renderDiv, setRenderDiv] = React.useState(<BookingOne />);
    const [renderStage, setRenderStage] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { t } = useTranslation();
    const navigate = useNavigate()
    
    return (
        
        <div className='page-body'>
            <div>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <BankCardModalContent />
                </Box>
                </Modal>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={roomDetails.image} className="d-block w-100" style={{height: 500, objectFit: 'cover'}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={roomDetails.image} className="d-block w-100" style={{height: 500, objectFit: 'cover'}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={roomDetails.image} className="d-block w-100" style={{height: 500, objectFit: 'cover'}} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{height: 300}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{height: 300}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h1 className='mt-5'>{t(roomDetails.name)}</h1>
            <h3>${roomDetails.price}/{t('night')}</h3>
            <div className='my-4'>
                {t(roomDetails.description).split('<br>').map((item, index) => {
                    return <p style={{margin: 5, fontSize: 22}} key={index}>{item}</p>
                })}
            </div>

            <div className='mt-4'>
                {renderDiv}
                <div>
                <button className='btn btn-secondary mt-4 px-5 py-2 me-3' onClick={() => {
                    if(renderStage === 2) {
                        setRenderDiv(<BookingOne />)
                        setShowBookingOne(true)
                    } else if(renderStage === 1) {
                        window.localStorage.clear()
                        navigate('/Home')
                    }
                }}>{t('back')}</button>
                <button className='btn btn-success mt-4 px-5 py-2' onClick={() => {
                    if(showBookingOne) {
                        if(checkValidity(1)){
                            setShowBookingOne(false)
                            setShowBookingTwo(true)
                            setRenderDiv(<BookingTwo />)
                            setRenderStage(2)
                        } else {
                            alert('Please fill all the fields correctly')
                        }
                    } else {
                        if(checkValidity(2))
                            handleOpen();
                        else
                            alert('Please fill all the fields correctly')
                    }
                }}>{t('next')}</button>
                </div>
            </div>

        </div>
    )
}

function checkValidity(step) {
    return step === 1 ? stepOneValid() : stepOneValid() && stepTwoValid();
}

function stepOneValid() {
    const floor = window.localStorage.getItem('floor');
    const person = window.localStorage.getItem('person');
    const checkin = window.localStorage.getItem('checkin');
    const checkout = window.localStorage.getItem('checkout');
    if(floor && person && checkin && checkout) {
        return true;
    }
    return false;
}

function stepTwoValid() {
    const name = window.localStorage.getItem('Name');
    const phone = window.localStorage.getItem('Phone');
    const email = window.localStorage.getItem('Email');
    if(name && phone && email) {
        return true;
    }
    return false;
}

function getRoomDetailsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('selectedRoom'));
}

function BankCardModalContent() {
    const { t } = useTranslation();
    return (
        <div style={{minWidth: 250}}>
            <h1 className='mb-3'>{t('credit_card_info')}</h1>
            <div className="mb-3">
                <label htmlFor="name">{t('full_name')}</label>
                <input onInput={e => {window.localStorage.setItem('ccName', e.target.value)}} type="text" className="form-control w-100" id="name" placeholder={t('enter_name')} required/>
            </div>
            <div className="">
                <label htmlFor="cardNum">{t('ccnum')}</label>
                <input onInput={e => {window.localStorage.setItem('ccNum', e.target.value)}} type="text" className="form-control" id="cardNum" placeholder="0000 0000 0000 0000" required/>
            </div>
            <div className="row">
            <div className="form-group col-sm-4 mt-3">
                <label htmlFor="ccmonth">{t('month')}</label>
                <select onSelect={e => {window.localStorage.setItem('ccMonth', e.target.value)}} className="form-control" id="ccmonth">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
            </div>
            <div className="form-group col-sm-4 mt-3">
                <label htmlFor="ccyear">{t('year')}</label>
                <select onSelect={e => {window.localStorage.setItem('ccYear', e.target.value)}} className="form-control" id="ccyear">
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                </select>
            </div>
            <div className="col-sm-4 mt-3">
                <div className="form-group">
                    <label htmlFor="cvv">CVV/CVC</label>
                    <input className="form-control" id="cvv" type="text" placeholder="123"/>
                </div>
            </div>
            </div>
            <Link to='/Receipt'>
                <button className='btn btn-success mt-3'>{t('book')}</button>
            </Link>
        </div>
    );
}