import "./logo.scss";
import logo from "../../assets/health-svgrepo-com.svg";
import whiteLogo from "../../assets/logo_white.png";


const Logo = ({white}) => {
  return (
    <>
      {white ? 
      (
        <div className="logo">
          <img src={whiteLogo} alt="stuff" />
          <p style={{color: "white"}}>Hashdoc</p>
        </div>
      ) :
      (
        <div className="logo">
          <img src={logo} alt="stuff" />
          <p>Hashdoc</p>
        </div>
      )  
    }
    </>
  )
}

export default Logo