import "./healthcaresignup.scss";
import "../../styles/generics.scss";
import logo from "../../assets/health-svgrepo-com.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";



const HealthCareSignup = () => {

    const navigate = useNavigate();
    const moveToQuestion = () => {navigate("/")}
    const moveToLogin = () => {navigate("/login")}

  return (
    <div className="healthcare_signup">
        <div className="healthcare_signup_left">
                <p onClick={moveToQuestion} className="healthcare_signup_left_back"><FaArrowLeft /></p>
            <form className="healthcare_signup_left_form">
                <div className="healthcare_signup_left_form_header">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <h3 className="heading_three">Create a Healthcare account</h3>
                    <p className="paragraph">Provide your details to register</p>
                </div>
                <div className="healthcare_signup_left_form_input">
                    <label className="paragraph_small" htmlFor="name">Name</label>
                    <input placeholder="Organization Name" type="text" id="name" className="input" />
                </div>
                <div className="healthcare_signup_left_form_input">
                    <label className="paragraph_small" htmlFor="location">Location</label>
                    <input placeholder="Nigeria" type="text" id="location" className="input" />
                </div>
                <div className="healthcare_signup_left_form_input">
                    <label className="paragraph_small" htmlFor="email">Email</label>
                    <input placeholder="example@gmail.com" type="email" id="email" className="input" />
                </div>
                <div className="healthcare_signup_left_form_input">
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

        <div className="healthcare_signup_image">
        </div>

    </div>
  )
}

export default HealthCareSignup