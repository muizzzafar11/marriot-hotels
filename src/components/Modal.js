import * as React from 'react';
import { Link } from 'react-router-dom';

export default function BasicModal(props) {
  const details = props.roomInfo

  return (
    <div>
      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Select
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <img className="" style={{height: 250}} src={details.image} alt="logo" />
            <div className="modal-body text-start">
              <h5>{details.name}</h5>
              <h5>${details.price}/night</h5>
              <p>{details.description}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <Link to='/Booking'>
                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={proceedToNextStep(details)}>Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function proceedToNextStep(details) {
    localStorage.setItem('selectedRoom', JSON.stringify(details));    
}
