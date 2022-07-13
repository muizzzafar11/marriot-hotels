import * as React from 'react';
import imageOne from '../assets/image-1.png'
import imageTwo from '../assets/image-2.png'
import imageThree from '../assets/image-3.png'
import imageFour from '../assets/image-4.png'
import imageFive from '../assets/image-5.png'
import imageSix from '../assets/image-6.png'
import BasicModal from '../components/Modal';
import { useTranslation } from "react-i18next";

class RoomInfo {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

const roomArr = [
    new RoomInfo('title_single_suite', 50, 
    'description_single_suite',
    imageOne),
    new RoomInfo('title_double_suite', 70, 
    'description_double_suite',
    imageTwo),
    new RoomInfo('title_triple_suite', 100, 
    'description_triple_suite',
    imageThree),
    new RoomInfo('title_single_bedroom', 35, 
    'description_single_bedroom',
    imageFour),
    new RoomInfo('title_double_bedroom', 50, 
    'description_double_bedroom',
    imageFive),
    new RoomInfo('title_triple_bedroom', 65, 
    'description_triple_bedroom',
    imageSix),
]

export default function RoomCards(params) {
    const { t } = useTranslation();
    return (
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
        {
        roomArr.map((details, index) => {
          return <div key={index} className='card-group'>
            <div className="card mb-3">
              <img className="card-img-top" src={details.image} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{t(details.name)}</h5>
                <h6>${details.price}/{t('night')}</h6>
                <h6>{t('rooms_available')}: 5</h6>
              </div>
              <div className="text-center my-3">
                <BasicModal roomInfo={details}/>
              </div>
            </div>
          </div>
         })
        }
      </div>
    )
  }