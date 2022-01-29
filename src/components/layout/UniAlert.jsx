import React from 'react';
import {useContext} from 'react'
import UniAlertContext from '../../context/universalAlert/UniAlertContext';

function UniAlert() {

    const {uniAlert}= useContext(UniAlertContext);
    
  return (
      uniAlert !== null && (
        <p className='flex items-start mb-4 space-x-2'>
             {uniAlert.type === 'error' && (
              <svg
                className='w-6 h-6 flex-none mt-0.5'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle cx='12' cy='12' r='12' fill='#FECDD3'></circle>
                <path
                  d='M8 8l8 8M16 8l-8 8'
                  stroke='#B91C1C'
                  strokeWidth='2'
                ></path>
              </svg>
            )}
            
            <p className='flex-1 text-base font-semibold leading-7 text-white'>
              <strong>{uniAlert.mmssg}</strong>
            </p>

           

        </p>
      )
  )
}

export default UniAlert;
