import * as React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutScreen() {
    const { t } = useTranslation();
    return (
        <div className='page-body'>
            <div className='about-div'>
                <h1 className="mt-5 text-center">{t('about_heading')}</h1>
                <div className="text-center container col-lg-12 col-md-8 col-sm-12 col-12 py-3">
                    <div className="row mb-5">
                        <div className="col my-auto pt-5">
                            <p className=""><b>{t('address')}:</b> 123 Testing Street</p>
                            <p className=""><b>{t('phone')}:</b> 000 - 000 - 0000</p>
                            <p className=""><b>{t('email')}:</b> marriot.hotels@gmail.com</p>
                        </div>
                        <div className="col my-auto pt-5">
                            <p className=""><b>{t('hrs_of_op')}:</b></p>
                            <p className=""><b>Weekdays:</b> 12:00 am - 11:59 pm (24 hrs service)</p>
                            <p className=""><b>Weekends:</b> 12:00 am - 11:59 pm (24 hrs service)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}