import VideoBigContent from '../../assets/video/video-big.mp4'
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Girl3 from "/images/portraits/girl_point.png";


import "./Page404.css"

function Page404() {
    return (
        <>
            <title>СофтТек | Страница не найдена</title>
            <meta
                name="description"
                content="Компания СофтТек предлагает полный цикл разработки ПО: сайты, приложения, поддержка и продвижение. От ТЗ до размещения! Обучение и техподдержка включены."
            />
            <meta name="keywords" content="разработка ПО, сайт, приложение, поддержка, СофтТек, SEO, контекстная реклама, техническое задание, модернизация, обучение, сопровождение. Яндекс Директ, Интернет реклама, Цифровая реклама Продвижение сайта, Разработка сайта" />


            <div className="nopage__container">
                <video className="bigVideo" width="100%" loop autoPlay muted playsInline>
                    <source src={VideoBigContent} type="video/mp4" />
                </video>
                <div className="container">
                    <div className="nopage__container--content">
                        <div className="nopage__container--info">
                            <h1 className="nopage__container--title">404</h1>
                            <p>К сожалению, такой страницы у нас нет. Давайте вернёмся на главную?</p>
                            <Link to={"/"}>
                                <Button>
                                    На главную
                                </Button>
                            </Link>
                        </div>
                        <img className="nopage__container--image" src={Girl3} alt="girl-point" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404;