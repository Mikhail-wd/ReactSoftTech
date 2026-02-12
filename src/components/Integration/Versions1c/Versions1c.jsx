import React, { useState, useEffect } from 'react';
import ArrowDownIcon from '../../../assets/icons/arrow-down.svg';


import './Versions1c.css';

function Versions1c({ versions1c }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedVersion, setSelectedVersion] = useState(versions1c[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleSelectChange = (version) => {
    setSelectedVersion(version);
    setIsDropdownOpen(false);
  };

  const handleDivClick = (version) => {
    setSelectedVersion(version);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='versions1c'>
      <div className='versions1c__box'>
        {windowWidth <= 660 ? (
          <div className={isDropdownOpen ? 'versions1c__dropdown no__shadow' : 'versions1c__dropdown'} onClick={toggleDropdown}>
            <p className='versions1c__item-text'>{selectedVersion.name}
              <img src={ArrowDownIcon} className={isDropdownOpen ? 'rotate' : ''} />
            </p>
            {isDropdownOpen && (
              versions1c.map((item, index) => (
                <div className={`versions1c__item ${selectedVersion === item ? 'selected' : ''}`} key={index} onClick={() => handleSelectChange(item)}>
                  <p className='versions1c__item-text'>{item.name}</p>
                </div>
              ))
            )}
          </div>
        ) : (
          versions1c.map((item, index) => (
            <div className={`versions1c__item ${selectedVersion === item ? 'selected' : ''}`} key={index} onClick={() => handleDivClick(item)}>
              <p className='versions1c__item-text'>{item.name}</p>
            </div>
          ))
        )}
      </div>

      
      <h2 className='versions1c__title'>{selectedVersion.name}</h2>
      <p className='versions1c__text'>{selectedVersion.text}</p>

      <div className='versions1c__box-tags'>
        {selectedVersion.tags.map((item, index) => {
          return <button className='versions1c__tag' key={index}>{item}</button>
        })}
      </div>

      <div className='versions1c__text-box'>
        <p className='versions1c__sub-title'>Эргономичный пользовательский интерфейс</p>
        <p className='versions1c__sub-text'>Значительное ускорение массового ввода информации благодаря функции ввода по строке и эффективному использованию клавиатуры Удобные средства работы с большими динамическими списками Управление видимостью и порядком колонок, настройка отбора и сортировки, печать списков</p>
      </div>

    </div>
  );
}

export default Versions1c;
