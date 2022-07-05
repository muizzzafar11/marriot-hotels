import * as React from 'react';
import homeImage from '../assets/home-image-text.png';
import marriotImage from '../assets/marriot-image.png'
import BasicModal from '../components/Modal';

class RoomInfo {
  constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
  }
}

const roomArr = [
  new RoomInfo('Single Bedroom Suite', 50, 
  'Our single Bedroom Suite provides views over landscaped gardens. It has a seating area, ample storage, digital safe and mini fridge. It is elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.'),
  new RoomInfo('Double Bedroom Suite', 70, 
  'Our double Bedroom Suite provides views over landscaped gardens. It has a seating area, ample storage, digital safe and mini fridge. It is elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.'),
  new RoomInfo('Triple Bedroom Suite', 100, 
  'Our triple Bedroom Suite provides views over landscaped gardens. It has a seating area, ample storage, digital safe and mini fridge. It is elegantly furnished with handmade furniture include luxury en-suite facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest pure white linen and towels.'),
  new RoomInfo('Single Bedroom & Toilet', 35, 
  'Travelling on a limited budget? Try out our bedroom + toilet rooms which have a toilet attached with the bedroom and all other utilities included. It has a seating area, ample storage, and mini fridge. It is fully furnished with furniture include luxury facilities with flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest towels.'),
  new RoomInfo('Double Bedroom & Toilet', 50, 
  'Travelling on a limited budget? Try out our bedroom + toilet rooms which have a toilet attached with the bedroom and all other utilities included. It has a seating area, ample storage, and mini fridge. It is fully furnished with furniture include luxury facilities with flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest towels.'),
  new RoomInfo('Triple Bedroom & Toilet', 65, 
  'Travelling on a limited budget? Try out our bedroom + toilet rooms which have a toilet attached with the bedroom and all other utilities included. It has a seating area, ample storage, and mini fridge. It is fully furnished with furniture include luxury facilities with flat screen LCD TV, tea/coffee making facilities, fan, hairdryer and the finest towels.'),
]

export default function HomeScreen() {
    return (
      <div className='page-body'>
        <img className="img-fluid" src={homeImage} alt="logo" />
        <div className='row mt-4'>
          <h2 className='col-12 col-md-6 my-auto pt-4'>
            Marriot Hotels are one of the finest 5 star hotels available in the country. 
            We offer everything you need to enjoy your vacation in an unknown place. 
            Find your home away from home with exceptional views and fine delicacies.
          </h2>
          <img className='col-12 col-md-6 img-fluid pt-4' src={marriotImage}></img>
        </div>
        <div>
          <h2 className='mx-auto'>Available suites and rooms</h2>
          <RoomCards/>
        </div>
      </div>
    );
  }

function RoomCards(params) {
  return (
    <div className='row'>
      {
      roomArr.map((details, index) => {
        return <div key={index} className='col-4 card-group'>
          <div className="card mb-3">
            <img className="card-img-top" src={marriotImage} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{details.name}</h5>
              <h6>${details.price}/night</h6>
              <h6>Rooms Available: 5</h6>
            </div>
            <div className="card-footer text-center">
              <BasicModal roomInfo={details}/>
            </div>
          </div>
        </div>
       })
      }
    </div>
  )
}