import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function BasicModal(props) {
  const details = props.roomInfo
  const { t } = useTranslation();
  return (
    <div>
      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={"#exampleModal"+details.name} onClick={() => {
        window.localStorage.clear();
      }}>
        {t('book')}
      </button>
      <div className="modal fade" id={"exampleModal"+details.name} tabIndex="-1" aria-labelledby={"exampleModal"+details.name+"Label"} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <img className="" style={{height: 250}} src={details.image} alt="logo" />
            <div className="modal-body text-start">
              <h5>{t(details.name)}</h5>
              <h5>${details.price}/{t('night')}</h5>
              {t(details.description).split('<br>').map((item, index) => {
                return <p style={{margin: 5}} key={index}>{item}</p>
              })}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('close')}</button>
              <Link to='/Booking'>
                {/* <button type="button" id="next-btn" className="next-btn btn btn-success" data-bs-dismiss="modal" onClick={proceedToNextStep(details)}>{t('next')}</button> */}
                <button type="button" id="next-btn" className="next-btn btn btn-success" data-bs-dismiss="modal" onClick={() => {
                  localStorage.setItem('selectedRoom', JSON.stringify(details));
                }}>{t('next')}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function proceedToNextStep(details) {
    localStorage.setItem('selectedRoom'+details.name, JSON.stringify(details));
}
