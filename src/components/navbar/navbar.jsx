import "./Navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className={`navbar`}>
      <img src={logo} alt="logo" className={`logo`} />
      <div className={`desktopMenu`}>
        <Link
          activeClass="active"
          to="intro"
          spy
          smooth
          offset={-100}
          duration={500}
          className={`desktopMenuListItem`}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy
          smooth
          offset={-40}
          duration={500}
          className={`desktopMenuListItem`}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy
          smooth
          offset={-40}
          duration={500}
          className={`desktopMenuListItem`}
        >
          Portfolio
        </Link>
      </div>
      <button
        className={`desktopMenuBtn`}
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <img src={contactImg} alt="" className={`desktopMenuImg`} />{" "}
        Contact Me
      </button>
    </div>
  );
};

export default Navbar;
