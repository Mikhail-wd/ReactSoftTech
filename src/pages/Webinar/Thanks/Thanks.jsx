import Button from '../../../components/Button/Button'
import './Thanks.css'

function Thanks() {
    return (
        <section className='webinar'>
            <div className='container'>
                <div className="webinar_thanks-wrapper">
                    <img src="/images/webinar/dots.png" alt="dots" className='thanks-dot' />
                    <div className='thanks-container'>
                        <h1 className='webinar_thanks-title'>Спасибо за регистрацию на вебинар <br /> "___"!</h1>
                        <p className='webinar_thanks-description'>Мы пришлем Вам ссылку на подключение за 1 день и, повторно, за 30 минут до его начала</p>
                        <div className='webinar_thanks-info'>
                            <img src="/images/webinar/gift.png" alt="gift" className='thanks-gift' />
                            <div className='webinar_thanks-info-wrapper'>
                                <h3>В благодарность мы дарим Вам </h3>
                                <p>Получите подарок, отправив заявку</p>
                                <Button reversed={true}>
                                    Получить подарок
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default Thanks;