import "./patientSignup.scss";
import "../../styles/generics.scss";
import logo from "../../assets/health-svgrepo-com.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";



const PatientSignUp = () => {

    const navigate = useNavigate();
    const moveToQuestion = () => {navigate("/")}
    const moveToLogin = () => {navigate("/login")}

  return (
    <div className="patient_signup">
        <div className="patient_signup_left">
                <p onClick={moveToQuestion} className="patient_signup_left_back"><FaArrowLeft /></p>
            <form className="patient_signup_left_form">
                <div className="patient_signup_left_form_header">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <h3 className="heading_three">Create a patient account</h3>
                    <p className="paragraph">Provide your details to register</p>
                </div>
                <div className="patient_signup_left_form_input">
                    <label className="paragraph_small" htmlFor="name">Full Name</label>
                    <input placeholder="Full Name" type="text" id="name" className="input" />
                </div>
                <div className="patient_signup_left_form_input">
                    <label className="paragraph_small" htmlFor="phone">phone(optional)</label>
                    <input placeholder="000-0000-000" type="number" id="phone" className="input phone" />
                    <span className="paragraph_small">+234</span>
                </div>
                <div className="patient_signup_left_form_input">
                    <label className="paragraph_small" htmlFor="email">Email</label>
                    <input placeholder="example@gmail.com" type="email" id="email" className="input" />
                </div>
                <div className="patient_signup_left_form_group">
                    <div className="patient_signup_left_form_group_input">
                        <label className="paragraph_small" htmlFor="age">Age</label>
                        <input placeholder="Enter Age" type="number" id="age" className="input" />
                    </div>
                    <div className="patient_signup_left_form_group_input">
                        <label className="paragraph_small" htmlFor="select">Gender</label>
                        <select className="custom_select" id="select">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="patient_signup_left_form_input">
                    <label className="paragraph_small" htmlFor="pass">password</label>
                    <input placeholder="********" type="password" id="pass" className="input" />
                </div>
                <button className="blue_btn">Sign up</button>
                <div className="line"></div>
                <p className="paragraph text-center">Already a member? <span style={{
                    color: "#3128a5",
                    cursor: "pointer",
                    marginTop: "1rem",
                }}
                onClick={moveToLogin}
                >Sign In</span></p>
            </form>
        </div>

        <div className="patient_signup_image">
        </div>

    </div>
  )
}

export default PatientSignUp