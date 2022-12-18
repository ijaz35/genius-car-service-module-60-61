import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p className='fw-bold bg-primary p-5 text-center mb-0 mt-4 text-white'><small>	&#169; copyright {year}</small></p>
        </footer>
    );
};

export default Footer;