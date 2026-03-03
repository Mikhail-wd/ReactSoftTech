import { useGetCompetenciesQuery } from '../../redux/api';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFormModal } from '../../contexts/FormModalContext';
import girl from '/images/portraits/girl3.jpg'
import FormWithImage from '../../components/FormComponent/FormWithImage';
import Page404 from '../Page404/Page404';
import BreadCrumps from '../../components/BreadCrumbs/BreadCrumbs'

import './CompetentionsItem.css'

function CompetenciesItem() {
    const { openFormModal } = useFormModal();
    const path = useLocation().pathname.split("/")[2]
    const [compData, setCompData] = useState([])
    const {
        data: competenciesList,
        error: errorcompetenciesList,
        isLoading: isLoadingCompetenciesList
    } = useGetCompetenciesQuery()

    useEffect(() => {
        if (competenciesList?.competencies !== undefined) {
            setCompData(competenciesList.competencies.filter(element => element.code === path))
        }
    }, [competenciesList])

    if (compData.length === 0) {
        return (<Page404 />)
    } else {
        return (
            <>
                <title>СофтТек | Компетенции</title>
                <meta
                    name="description"
                    content="Компания СофтТек предлагает полный цикл разработки ПО: сайты, приложения, поддержка и продвижение. От ТЗ до размещения! Обучение и техподдержка включены."
                />
                <meta name="keywords" content="разработка ПО, сайт, приложение, поддержка, СофтТек, SEO, контекстная реклама, техническое задание, модернизация, обучение, сопровождение. Яндекс Директ, Интернет реклама, Цифровая реклама Продвижение сайта, Разработка сайта" />

                <BreadCrumps text={compData[0].title} />

                <section className="developmentPage__box">
                    <div class="bannerEquipment__box">
                        <img class="bannerEquipment__img-banner" alt="" src={compData[0].img} />
                        <div class="bannerEquipment__content">
                            <div class="container">
                                <h1 class="bannerEquipment__header">{compData[0].title}</h1>
                                <button class="bannerEquipment__btn" onClick={()=>openFormModal()}>Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='competencies'>
                    <div className='container'>
                        <p className='competencies_content'>{compData[0].description}</p>
                    </div>
                </section>
                <section>
                    <div className="container home-form__container">
                        <h2 className="form-header">Нужна консультация нашего менеджера?</h2>
                        <div className="Form">
                            <FormWithImage header={""} text="" imageSrc={girl} />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default CompetenciesItem;