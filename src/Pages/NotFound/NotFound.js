import React from 'react';
import logo from '../../../src/images/sleepy.jpg'

const NotFound = () => {
    return (
        <div className="text-center">
            <h2 className='text-primary text-center mt-4'>Mechanic not found</h2>
            <img className='w-75  my-5' src={logo} alt="" />
        </div>
    );
};

export default NotFound;