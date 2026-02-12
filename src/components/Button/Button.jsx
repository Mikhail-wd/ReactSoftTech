import "./Button.css"

function Button({ children, click }) {
    return (
        <button onClick={click} className="footer__form-btn">
            {children}
        </button>
    );
}

export default Button;