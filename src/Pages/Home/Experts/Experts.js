import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Will smith', img: expert1 },
        { id: 2, name: 'Rock jason', img: expert2 },
        { id: 3, name: 'John carter', img: expert3 },
        { id: 4, name: 'Wick cane', img: expert4 },
        { id: 5, name: 'Will james', img: expert5 },
        { id: 6, name: 'Jacki lilly', img: expert6 }
    ]
    return (
        <div id="experts" className='container mt-5'>
            <h2 className='text-primary text-center'>Experts </h2>
            <div className='row mt-3'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;