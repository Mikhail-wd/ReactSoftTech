import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import "./WorkWithUs.css"

function WorkWithUs() {


    return (
        <div className="work_with_us">
            <p className="work_with_us-content">Узнайте больше о вакансиях и работе в СофтТек</p>
            <Button>
                <Link to="/vacancies/open-vacancies" className="work_with_us-link">Перейти</Link>
            </Button>
        </div>
    );
}

export default WorkWithUs;