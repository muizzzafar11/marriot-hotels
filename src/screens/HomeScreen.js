import * as React from 'react';
import { useTranslation } from "react-i18next";

import homeImageMobile from '../assets/home-image-mobile.png';
import homeImage from '../assets/home-image-text-2.png'
import marriotImage from '../assets/marriot-image.png'
import homeImageFrench from '../assets/home-image-french.png'
import homeImageMobileFrench from '../assets/home-image-french-mobile.png'

import swimming from '../assets/swimming.png'
import ac from '../assets/ac.png'
import dinner from '../assets/dinner.png'
import wifi from '../assets/wifi.png'
import parking from '../assets/parking.png'
import RoomCards from '../components/RoomCards';
import i18next from 'i18next';

export default function HomeScreen() {
    const { t } = useTranslation();
    const [image, setImage] = React.useState(homeImage);
    const [imageMobile, setImageMobile] = React.useState(homeImageMobile);
    React.useEffect(() => {
      var lan = i18next.language
      setImage(lan === 'en' ? homeImage : homeImageFrench);
      setImageMobile(lan === 'en' ? homeImageMobile : homeImageMobileFrench);
    }, [i18next.language]);

    return (
      <div className='page-body'>
        <div className=''>
          <img className="img-fluid d-block d-md-none col" src={imageMobile} alt="logo" />
          <img className="img-fluid d-none d-md-block col" src={image} alt="logo" />
        </div>
        <div className='row mt-4'>
          <div className='col-12 col-md-7 mt-1 pt-4'>
          <p style={{fontSize: 28}}>
            {t('description')}
          </p>
          <ul style={{fontSize: 28}}>
            <li>
              {t('pool')} 
              <img className='img-fluid' style={{width: 40, marginLeft: 5}} src={swimming}></img>
            </li>
            <li>
              {t('ac')} 
              <img className='img-fluid' style={{width: 40 , marginLeft: 10}} src={ac}></img>
            </li>
            <li>
              {t('wifi')} 
              <img className='img-fluid' style={{width: 25, marginLeft: 10}} src={wifi}></img>
            </li>
            <li>
              {t('room_service')} 
              <img className='img-fluid' style={{width: 30 , marginLeft: 10}} src={dinner}></img>
            </li>
            <li>
              {t('parking')} 
              <img className='img-fluid' style={{width: 25 , marginLeft: 10}} src={parking}></img>
            </li>
          </ul>
        </div>
        <img className='col-12 col-md-5 img-fluid pt-4' src={marriotImage}></img>
      </div>
      <div>
        <h1 className='text-center mt-4 py-4'>{t('rooms_heading')}</h1>
        <RoomCards/>
      </div>
    </div>
  );
}

function HomeImageRender() {

}

