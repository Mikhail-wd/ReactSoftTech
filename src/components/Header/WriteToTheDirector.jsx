import React from "react";
import { useFormModal } from "../../contexts/FormModalContext";
import "./WriteToTheDirector.css";

function WriteToTheDirector(props) {
  const { openDirectorModal } = useFormModal();

  return (
    <div className="writeToTheDirector">
      <div className="container">
        <div className="writeToTheDirector__box">
          <button
            onClick={openDirectorModal}
            className="writeToTheDirector__link"
          >
            Написать директору
          </button>
          {/* <button className='writeToTheDirector__btn'>
                        RU
                    </button> */}
        </div>
      </div>
    </div>
  );
}

export default WriteToTheDirector;
