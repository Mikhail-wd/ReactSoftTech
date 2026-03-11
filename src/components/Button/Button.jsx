import "./Button.css"

function Button({ children, click, reversed = false }) {
    if (reversed) {
        return (
            <button onClick={click} className="footer__form-btn-reverse">
                {children}
            </button>
        );
    } else {
        return (
            <button onClick={click} className="footer__form-btn">
                {children}
            </button>
        );
    }
}

export default Button;