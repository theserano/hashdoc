import "./question.scss";
import "../../styles/generics.scss";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";



const Question = () => {

    const navigate = useNavigate();

    const moveToPatientLogin = () => {
        navigate("/patient-sign-up")
    }
    const moveToHealthCareLoginPage = () => {
        navigate('/health-care-login');
    }
    const moveToLogin = () => {
        navigate("/login");
    }

  return (
    <div className="question">
        <div className="question_container">
            <div className="question_container_buttons">
                <Logo />
                <h2 className="heading_two">Welcome to Hashdoc</h2>
                <p className="paragraph text_bold" style={{
                    marginTop: "-2rem",
                    paddingLeft: ".7rem"
                }}>Manage your health care records with ease</p>
                <button onClick={moveToPatientLogin} className="transparent_btn">Patient?</button>
                <button onClick={moveToHealthCareLoginPage} className="transparent_btn">Helath care Provider?</button>
                <p onClick={moveToLogin} className="paragraph text_bold" style={{
                    textAlign: "center",
                    marginTop: "-1rem",
                    cursor: "pointer"
                }}>Already a user?</p>
            </div>
        </div>

    </div>
  )
}

export default Question