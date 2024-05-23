import { Link } from 'react-router-dom';
import { useState } from "react";
import img1 from "../Assesst/foodCompany.png";
const Heading = () => {
  const [btnName, setbtnName] = useState("Login")
  console.log("Header")
  return (
    <>
      <div className="container">
        <div className="isimage">
          <img src={img1} alt='logo' />
        </div>

        <ul className="nav-bar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")

            }}>{btnName}</button>
        </ul>

      </div>
    </>
  )
}
export default Heading