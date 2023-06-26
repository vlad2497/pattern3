import { NavLink } from "react-router-dom";
import TestImg from "../../assets/images/1.svg";
import "./index.css";

function Header() {
  console.log("TEST", process.env.TEST);
  return (
    <div>
      <h1 className="title">Hello from React!</h1>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/form">Form</NavLink>
      <TestImg />
      <img
        src={require("../../assets/images/lightning-mcqueen-2.jpeg")}
        width="100px"
        height="100px"
        alt=""
      />
      {/* <MyImage width="100px" height="100px" /> */}
      <div className="image" />
    </div>
  );
}

export default Header;
