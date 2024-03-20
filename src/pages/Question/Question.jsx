import "./question.scss";
import "../../styles/generics.scss";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import people from "../../assets/people.svg";



const Question = () => {

    const navigate = useNavigate();

    const moveToPatientLogin = () => {
        navigate("/patient-sign-up")
    }
    const moveToHealthCareLoginPage = () => {
        navigate('/health-care-sign-up');
    }
    const moveToLogin = () => {
        navigate("/login");
    }

  return (
    <div className="question">
        <div className="question_container">
                <Logo />
                <div className="question_container_details">
                    <h3 className="heading_three">Welcome to Hashdoc</h3>
                    <p className="paragraph text-sm">Manage your health care records with ease</p>
                    <div className="question_container_details_links" onClick={moveToHealthCareLoginPage} >
                        <img src={people} alt="people" />
                        <div>
                            <h5 className="heading_five">I'm a Healthcare Provider</h5>
                            <p className="paragraph_small">I need to open an account for my business</p>
                        </div>
                    </div>
                    <div className="question_container_details_links" onClick={moveToPatientLogin} >
                        <img src={people} alt="people" />
                        <div>
                            <h5 className="heading_five">I'm a Patient</h5>
                            <p className="paragraph_small">I need to open an account for my myself</p>
                        </div>
                    </div>
                    <div className="question_container_details_links" onClick={moveToHealthCareLoginPage}>
                    <img src={people} alt="people" />
                        <div>
                            <h5 className="heading_five">I'm a Researcher</h5>
                            <p className="paragraph_small">I need to open an account for my myself</p>
                        </div>
                    </div>
                    <p className="paragraph_small question_container_details_text">Already have an account? <span onClick={moveToLogin}>Login now</span></p>
                </div>
        </div>
        <div className="question_image"></div>

    </div>
  )
}

export default Question