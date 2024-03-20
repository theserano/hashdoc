import "./login.scss";
import "../../styles/generics.scss";
import logo from "../../assets/health-svgrepo-com.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";



const Login = () => {

    const navigate = useNavigate();
    const moveToQuestion = () => {navigate("/")}

  return (
    <div className="login">
        <div className="login_left">
                <p onClick={moveToQuestion} className="login_left_back"><FaArrowLeft /></p>
            <form className="login_left_form">
                <div className="login_left_form_header">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <h3 className="heading_three">Login to your account</h3>
                    <p className="paragraph">Experience ease with healthcare records</p>
                </div>
                <div className="login_left_form_input">
                    <label className="paragraph_small" htmlFor="email">Email</label>
                    <input placeholder="example@gmail.com" type="email" id="email" className="input" />
                </div>
                <div className="login_left_form_input">
                    <label className="paragraph_small" htmlFor="pass">password</label>
                    <input placeholder="********" type="password" id="pass" className="input" />
                </div>
                <button className="blue_btn">Log in</button>
                <div className="line"></div>
                <p className="paragraph text-center">Don't have an account? <span style={{
                    color: "#3128a5",
                    cursor: "pointer",
                    marginTop: "1rem",
                }}
                onClick={moveToQuestion}
                >Sign Up</span></p>
            </form>
        </div>

        <div className="login_image">
        </div>

    </div>
  )
}

export default Login