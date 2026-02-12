import './Loader.css';
import loader from '/images/preloader.gif'

export const Loader = () => {
    return (
        <div className="spinner-container">
            {/*<div className="loading-spinner">*/}
            {/*</div>*/}
            <img src={loader}/>
        </div>
    );
}
