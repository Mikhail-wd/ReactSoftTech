import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./ParticipantsFeedback.css";

const users = [
    {
        name: "Анна Петрова",
        img: "/images/webinar/anna.png",
        feedback: "Огромное спасибо за вебинар! Это были не просто теоретические знания, а реальные кейсы, которые я уже начал использовать в работе. Получил массу полезных идей и вдохновения. Жду следующий вебинар"
    },
    {
        name: "Дмитрий Ковалев",
        img: "/images/webinar/dima.png",
        feedback: "Это был мой первый вебинар, и я рад, что решил присоединиться. Формат очень удобный, всё доступно объяснили. Даже сложные темы показались понятными благодаря примерам и разбору реальных ситуаций"
    },
    {
        name: "Дмитрий Ковалев",
        img: "/images/webinar/dima.png",
        feedback: "Это был мой первый вебинар, и я рад, что решил присоединиться. Формат очень удобный, всё доступно объяснили. Даже сложные темы показались понятными благодаря примерам и разбору реальных ситуаций"
    },
    {
        name: "Дмитрий Ковалев",
        img: "/images/webinar/dima.png",
        feedback: "Это был мой первый вебинар, и я рад, что решил присоединиться. Формат очень удобный, всё доступно объяснили. Даже сложные темы показались понятными благодаря примерам и разбору реальных ситуаций"
    }, {
        name: "Дмитрий Ковалев",
        img: "/images/webinar/dima.png",
        feedback: "Это был мой первый вебинар, и я рад, что решил присоединиться. Формат очень удобный, всё доступно объяснили. Даже сложные темы показались понятными благодаря примерам и разбору реальных ситуаций"
    }
]

function ParticipantsFeedback({ usersList = users }) {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <div className="participants__box">
            <div className="swiper-container">
                <Swiper
                    modules={[Pagination]}
                    pagination={pagination}
                    spaceBetween={30}
                    className="swiper_participants_feedback"
                    grabCursor={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        960: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1200: {
                            spaceBetween: 30,
                            slidesPerView: 2
                        }
                    }}
                >
                    {usersList.map((element, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="participants_feedback-item">
                                    <div className="participants_feedback-item-title">
                                        <div className="participants_feedback-item-avatar" style={{ backgroundImage: `url(${element.img})` }}></div>
                                        <p>{element.name}</p>
                                    </div>
                                    <p className="participants_feedback-item-feedback">
                                        {element.feedback}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </div >
    );
}

export default ParticipantsFeedback;
