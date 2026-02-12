import React from 'react';
import './Solution.css';

function Solution({ project }) {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <>
      <div className='solution__container'>
        <div className='container'>
          <div className='solution__box'>
            <div className='project__header-box'>
              <h1 className='project__header'>Решение</h1>
              <p className='project__text'>{project.decision}</p>
            </div>

            {project?.decisionCard && project.decisionCard.length > 0 && (
              <div className='solution__cards'>
                {project.decisionCard.map((card, index) => (
                  <div className='solution__card' key={card.id || index}>
                    {card.cover?.url && (
                      <div className='solution__card-img-box'>
                        <img
                          className='solution__card-img'
                          src={`${apiUrl}${card.cover.url}`}
                          alt={card.title || ''}
                        />
                      </div>
                    )}
                    <div className='solution__card-content'>
                      {card.title && (
                        <h3 className='solution__card-title'>{card.title}</h3>
                      )}
                      {card.description && (
                        <p className='solution__card-description'>{card.description}</p>
                      )}
                      {card.link && (
                        <a
                          href={card.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='solution__card-link'
                        >
                          Подробнее
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Solution;
