import React from 'react';
import './LoadingAll.scss'

const LoadingAll = () => {
    return (
        <div>
              <div className='skeleton__wrapper container'>
        <div className="skeleton__card">
            <div className="skeleton__image skeleton__anime"></div>
           <div className="oll">
           <div className="skeleton__titler "></div>
            <div className="skeleton__pricer"></div>
            <div className="skeleton__pricer"></div>
            <div className="skeleton__pricerr"></div>
           </div>
        </div>

      <div className="skeleton__card">
      <div className="app"> </div>
            <div className="skeleton__title skeleton__anime"></div>
            <div className="skeleton__price skeleton__anime"></div>
            <div className="skeleton__price skeleton__anime"></div>
       
      </div>
        <div className="skeleton__card">
            <div className="skeleton"></div>
            <div className="skeleton__title skeleton__anime"></div>
            <div className="skeleton__price skeleton__anime"></div>
            <div className="skeleton__price skeleton__anime"></div>
        </div>
        </div>
        </div>
    );
}

export default LoadingAll;
