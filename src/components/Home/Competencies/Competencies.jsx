import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Competencies.css'

function CompetenciesCard({ dataArray }) {
    const [active, setActive] = useState(false)
    function resizeStop(state) {
        if (window.innerWidth >= 660) {
            setActive(state)
        }
    }

    return (
        <div className={active ? "competencies__item competencies__item--active" : "competencies__item"}
            style={{ backgroundImage: `url(${dataArray.img})` }}
            onMouseEnter={() => resizeStop(true)}
            onMouseLeave={() => resizeStop(false)}
        >
            <Link to={"/competentions/" + dataArray.code}
                className={active ? "competencies__item-content--active competencies__item-content" : "competencies__item-content"}>
                <h2 className="competencies__item-content-title">
                    {dataArray.title}
                </h2>
                <p className="competencies__item-content-text">
                    {dataArray.description}
                </p>
            </Link>
        </div>
    )
}

export default function Competencies({ data }) {
    return (
        <>
            <h2 className='competencies__title'>Компетенции</h2>
            <div className='competencies__wrapper'>
                {data?.map((element, index) => {
                    return <CompetenciesCard dataArray={element} key={index} />
                })}
            </div>
            <div className='competencies__slice'></div>
        </>
    )
}