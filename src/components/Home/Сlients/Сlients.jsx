import React from 'react';
import './Сlients.css';

function Сlients({clients}) {

    return (
        <div className='clients__container'>

            <h2 className='clients__header'>Клиенты</h2>

            <div className='clients__list'>

                {clients?.map((client, index) => (
                    <div key={index} className="clients__item">
                        <img src={client.img} alt="client img" className="clients__item-img"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Сlients;
