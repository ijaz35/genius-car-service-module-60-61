import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h2>This is service detail: {serviceId}</h2>
            <button onClick={() => navigate('/checkout')}>Proceed Checkout</button>
        </div>
    );
};

export default ServiceDetail;