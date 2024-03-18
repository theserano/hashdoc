import "./patientLogn.scss";
import "../../styles/generics.scss";
import logo from "../../assets/health-svgrepo-com.svg";
import { FaUser, FaPager, FaPhone, FaLock, FaAddressBook } from "react-icons/fa6";
import { Link } from "react-router-dom";



const PatientSignUp = () => {
  return (
    <div className="patient_login">
        <form className="patient_login_form">
            <div className="patient_login_form_header">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <h3 className="heading_three">Create a patient account</h3>
                <p className="paragraph">Enter your details to register</p>
            </div>
            <div className="patient_login_form_input">
                <label className="paragraph_small" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="input" />
                <span><FaUser /></span>
            </div>
            <div className="patient_login_form_input">
                <label className="paragraph_small" htmlFor="age">Age</label>
                <input type="number" id="age" className="input" />
                <span><FaPager /></span>
            </div>
            <div className="patient_login_form_input">
                <label className="paragraph_small" htmlFor="select">Gender</label>
                <select className="input" id="select">
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="patient_login_form_input">
                <label className="paragraph_small" htmlFor="phone">phone(optional)</label>
                <input type="number" id="phone" className="input" />
                <span><FaPhone /></span>
            </div>
            <div className="patient_login_form_input">
                <label className="paragraph_small" htmlFor="email">Email</label>
                <input type="email" id="email" className="input" />
                <span><FaAddressBook /></span>
            </div>
            <div className="patient_login_form_input">
                <label className="paragraph_small" htmlFor="pass">password</label>
                <input type="password" id="pass" className="input" />
                <span><FaLock /></span>
            </div>
            <button className="blue_btn">Sign up</button>
            <div className="line"></div>
            <p className="paragraph text-center">Already a member? <span style={{
                color: "#3128a5",
                cursor: "pointer",
                marginTop: "1rem"
            }}>Sign In</span></p>
        </form>
    </div>
  )
}

export default PatientSignUp