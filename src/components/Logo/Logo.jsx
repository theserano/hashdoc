import "./logo.scss";
import logo from "../../assets/health-svgrepo-com.svg";


const Logo = () => {
  return (
    <div className="logo">
        <img src={logo} alt="stuff" />
        <p>Hashdoc</p>
    </div>
  )
}

export default Logo