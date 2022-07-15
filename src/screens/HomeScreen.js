import * as React from 'react';
import homeImageMobile from '../assets/home-image-mobile.png';
import homeImage from '../assets/home-image-text-2.png'
import marriotImage from '../assets/marriot-image.png'
import imageOne from '../assets/image-1.png'
import imageTwo from '../assets/image-2.png'
import imageThree from '../assets/image-3.png'
import imageFour from '../assets/image-4.png'
import imageFive from '../assets/image-5.png'
import imageSix from '../assets/image-6.png'
import BasicModal from '../components/Modal';

class RoomInfo {
  constructor(name, price, description, image) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.image = image;
  }
}

const roomArr = [
  new RoomInfo('Single Bedroom Suite', 50, 
  'Our single Bedroom Suite provides views over landscaped gardens. It has a seating area, ample storage, digital safe and mini fridge. It is elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.',
  imageOne),
  new RoomInfo('Double Bedroom Suite', 70, 
  'Our double Bedroom Suite provides views over landscaped gardens. It has a seating area, ample storage, digital safe and mini fridge. It is elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.',
  imageTwo),
  new RoomInfo('Triple Bedroom Suite', 100, 
  'Our triple Bedroom Suite provides views over landscaped gardens. It has a seating area, ample storage, digital safe and mini fridge. It is elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.',
  imageThree),
  new RoomInfo('Single Bedroom & Toilet', 35, 
  'Travelling on a limited budget? Try out our bedroom + toilet rooms which have a toilet attached with the bedroom and all other utilities included. It has a seating area, ample storage, and mini fridge. It is fully furnished with furniture include luxury facilities with flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest towels.',
  imageFour),
  new RoomInfo('Double Bedroom & Toilet', 50, 
  'Travelling on a limited budget? Try out our bedroom + toilet rooms which have a toilet attached with the bedroom and all other utilities included. It has a seating area, ample storage, and mini fridge. It is fully furnished with furniture include luxury facilities with flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest towels.',
  imageFive),
  new RoomInfo('Triple Bedroom & Toilet', 65, 
  'Travelling on a limited budget? Try out our bedroom + toilet rooms which have a toilet attached with the bedroom and all other utilities included. It has a seating area, ample storage, and mini fridge. It is fully furnished with furniture include luxury facilities with flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest towels.',
  imageSix),
]

export default function HomeScreen() {
    return (
      <div className='page-body'>
        <div className='row position-relative'>
          <img className="img-fluid d-block d-md-none col" src={homeImageMobile} alt="logo" />
          <img className="img-fluid d-none d-md-block col" src={homeImage} alt="logo" />
          <div class="col mt-auto position-absolute"> box2 </div>
        </div>
        <div className='row mt-4'>
          <p className='col-12 col-md-7 mt-1 pt-4' style={{fontSize: 28}}>
            Marriot Hotels are one of the finest 5 star hotels available in the country. 
            We offer everything you need to enjoy your vacation in an unknown place. 
            Find your home away from home with exceptional views and fine delicacies.
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

function RoomCards(params) {
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      {
      roomArr.map((details, index) => {
        return <div key={index} className='card-group'>
          <div className="card mb-3">
            <img className="card-img-top" src={details.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{details.name}</h5>
              <h6>${details.price}/night</h6>
              <h6>Rooms Available: 5</h6>
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