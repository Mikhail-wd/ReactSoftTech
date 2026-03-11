import Button from '../../components/Button/Button';
import VideoBigContent from '../../assets/video/video-big.mp4'
import ParticipantsFeedback from '../../components/WebinarPage/ParticipantsFeedback';
import girl from '/images/portraits/girl3.jpg'
import girl2 from '/images/portraits/girl3.jpg'
import './Webinar.css'
import { useEffect, useState } from 'react';

function Webinar() {
    const [timeLimit, setTimeLimiyt] = useState(18000000)
    const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At consectetur expedita ab architecto consequuntur nam voluptatum facilis, amet blanditiis odio placeat dignissimos quod deserunt quibusdam exercitationem dolore eius, vero magnam? Officia laboriosam perferendis quod accusantium expedita, placeat architecto deserunt ex ab tempore iste quisquam, distinctio ipsa quaerat. Dolores aspernatur, illum harum at suscipit commodi debitis sint modi voluptatibus ratione porro."

    function textFormation(string) {
        if (string.length <= 100) {
            return string
        } else {
            return string.slice(0, 100) + "..."
        }
    }

    function timerRender(value, timeLeft) {
        const hours = timeLeft < 0 ? 0 :
            (Math.floor((timeLimit % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))) <= 9 ?
                "0" + Math.floor((timeLimit % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)) :
                Math.floor((timeLimit % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
        const mins = timeLeft < 0 ? 0 :
            (Math.floor((timeLimit % (1000 * 60 * 60)) / (1000 * 60))) <= 9 ?
                "0" + Math.floor((timeLimit % (1000 * 60 * 60)) / (1000 * 60)) :
                Math.floor((timeLimit % (1000 * 60 * 60)) / (1000 * 60));
        const secs = timeLeft < 0 ? 0 :
            (Math.floor((timeLimit % (1000 * 60)) / 1000)) <= 9 ?
                "0" + Math.floor((timeLimit % (1000 * 60)) / 1000) :
                Math.floor((timeLimit % (1000 * 60)) / 1000);

        switch (value) {
            case "hour":
                return hours
            case "min":
                return mins
            case "sec":
                return secs
            default:
                return "NaN"
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLimiyt(timeLimit - 1000)
        }, 1000)

        timer

        return () => {
            clearTimeout(timer)
        }
    }, [timeLimit])

    return (
        <>
            <section className='webinar'>
                <div className='container'>
                    <div className='webinar_header'>
                        <h1 className='webinar_header-title'>Заголовок</h1>
                        <p className='webinar_header-content'>25 октября в 19:00</p>
                        <Button reversed={true}>
                            Хочу на вебинар!
                        </Button>
                    </div>
                    <video className="bigVideo" width="100%" loop autoPlay muted playsInline>
                        <source src={VideoBigContent} type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className='webinar'>
                <div className='container'>
                    <div className='webinar_reasons_to_come'>
                        <h3 className='webinar_reasons_to_come-title'>Почему нужно прийти на вебинар</h3>
                        <div className='webinar_reasons_to_come-items'>
                            <div className='webinar_reasons_to_come-item'>
                                <p>Практические знания от экспертов</p>
                                <p>На вебинаре вас ждут реальные кейсы, проверенные стратегии и полезные советы от опытных профессионалов.</p>
                            </div>
                            <div className='webinar_reasons_to_come-item'>
                                <p>Актуальные темы</p>
                                <p>Мы разбираем темы, которые действительно важны для вашего личного и профессионального роста. Вебинар поможет вам быть на шаг впереди в своём деле.</p>
                            </div>
                            <div className='webinar_reasons_to_come-item'>
                                <p>Прямое взаимодействие с экспертом</p>
                                <p>На вебинаре у вас будет возможность общаться напрямую с экспертом. Вы сможете задать вопросы, обсудить важные нюансы и получить советы по вашим конкретным задачам</p>
                            </div>
                            <div className='webinar_reasons_to_come-item'>
                                <p>Запись вебинара</p>
                                <p>Если вы не успеете посмотреть его вживую, мы предоставим запись, чтобы вы могли вернуться к материалам в удобное для вас время.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='webinar'>
                <div className='container'>
                    <h3 className='webinar_reasons_to_come-title'>Спикеры</h3>
                    <div className='webinar_speakers-items'>
                        <div className='webinar_speakers-item'>
                            <div className='webinar_speakers-item-avatar'
                                style={{ backgroundImage: `url(${girl})` }}
                            ></div>
                            <p className='webinar_speakers-item-name'>
                                Виктор Викторович
                            </p>
                            <p className='webinar_speakers-item-description'>
                                {textFormation(text)}
                            </p>
                        </div>
                        <div className='webinar_speakers-item'>
                            <div className='webinar_speakers-item-avatar'
                                style={{ backgroundImage: `url(${girl2})` }}
                            ></div>
                            <p className='webinar_speakers-item-name'>
                                Алиса Алисовна
                            </p>
                            <p className='webinar_speakers-item-description'>
                                {textFormation(text)}
                            </p>
                        </div>
                    </div>
                    <div className='webinar_reasons_to_come-footer'>
                        <Button>
                            Хочу на вебинар!
                        </Button>
                    </div>
                </div>
            </section>

            <section className='webinar'>
                <div className='container'>
                    <h3 className='webinar_reasons_to_come-title'>Приемущества</h3>
                    <div className='webinar_reasons_to_come-items'>
                        <div className='webinar_advantage-item'>
                            <p>Заголовок</p>
                            <p>Описание</p>
                        </div>
                        <div className='webinar_advantage-item'>
                            <p>Заголовок</p>
                            <p>Описание</p>
                        </div>
                        <div className='webinar_advantage-item'>
                            <p>Заголовок</p>
                            <p>Описание</p>
                        </div>
                        <div className='webinar_advantage-item'>
                            <p>Заголовок</p>
                            <p>Описание</p>
                        </div>
                    </div>
                    <div className='webinar_reasons_to_come-footer'></div>
                </div>
            </section>

            <section className='webinar'>
                <div className='container'>
                    <h3 className='webinar_reasons_to_come-title'>Отзывы участников</h3>
                    <div>
                        <ParticipantsFeedback />
                    </div>
                </div>
            </section>

            <section className='webinar'>
                <div className='container'>
                    <div className='webinar_clockingout'>
                        <img src="/images/webinar/clock.png" alt="clock" className='webinar_clockingout-clock' />
                        <div className='webinar_clock_content'>
                            <p>Ваша скидка сгорит через:</p>
                            <div className='webinar_clock-timer'>
                                <div className='webinar_clock-child'>{timerRender("hour", timeLimit)}</div>
                                <span>:</span>
                                <div className='webinar_clock-child'>{timerRender("min", timeLimit)}</div>
                                <span>:</span>
                                <div className='webinar_clock-child'>{timerRender("sec", timeLimit)}</div>
                            </div>
                            <Button reversed={true}>
                                Хочу на вебинар!
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Webinar;