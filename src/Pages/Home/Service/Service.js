import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const showServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-detail'>
            <img className='w-100' src={img} alt="" />
            <div className='p-3'>
                <h2>{name}</h2>
                <p>Price: $ {price}</p>
                <p><small>{description}</small></p>
                <button onClick={() => showServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;