import * as React from 'react';
import homeImageMobile from '../assets/home-image-mobile.png';
import homeImage from '../assets/home-image-text-2.png'
import marriotImage from '../assets/marriot-image.png'

import swimming from '../assets/swimming.png'
import ac from '../assets/ac.png'
import dinner from '../assets/dinner.png'
import wifi from '../assets/wifi.png'
import parking from '../assets/parking.png'
import RoomCards from '../components/RoomCards';

export default function HomeScreen() {
    return (
      <div className='page-body'>
        <div className=''>
          <img className="img-fluid d-block d-md-none col" src={homeImageMobile} alt="logo" />
          <img className="img-fluid d-none d-md-block col" src={homeImage} alt="logo" />
        </div>
        <div className='row mt-4'>
          <p className='col-12 col-md-7 mt-1 pt-4' style={{fontSize: 28}}>
            Marriot Hotels are one of the finest 5 star hotels available in the country. 
            We offer everything you need to enjoy your vacation in an unknown place. 
            Find your home away from home with exceptional views and fine delicacies. Some of the facilities we offer are:
            <ul>
              <li>
                Pool 
                <img className='img-fluid' style={{width: 40, marginLeft: 5}} src={swimming}></img>
              </li>
              <li>
                Air Conditioning
                <img className='img-fluid' style={{width: 40 , marginLeft: 10}} src={ac}></img>
              </li>
              <li>
                Wi-Fi
                <img className='img-fluid' style={{width: 25, marginLeft: 10}} src={wifi}></img>
              </li>
              <li>
                24-hour Room Service
                <img className='img-fluid' style={{width: 30 , marginLeft: 10}} src={dinner}></img>
              </li>
              <li>
                Free Parking
                <img className='img-fluid' style={{width: 25 , marginLeft: 10}} src={parking}></img>
              </li>
            </ul>
                  
          </p>
          <img className='col-12 col-md-5 img-fluid pt-4' src={marriotImage}></img>
        </div>
        <div>
          <h1 className='text-center mt-4 py-4'>Available suites and rooms</h1>
          <RoomCards/>
        </div>
      </div>
    );
  }

