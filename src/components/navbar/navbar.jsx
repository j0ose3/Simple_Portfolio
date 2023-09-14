import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

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
        <img src={contactImg} alt="" className={`desktopMenuImg`} /> Contact Me
      </button>
      <img src={menu} alt="Menu" className={`mobMenu`} onClick={()=> setShowMenu(!showMenu)} />
  <div className={`navMenu`} style={{display: showMenu? 'flex' : 'none'}} >
        <Link
          activeClass="active"
          to="intro"
          spy
          smooth
          offset={-100}
          duration={500}
          className={`listItem`} onClick={() => setShowMenu(false)}
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
          className={`listItem`} onClick={() => setShowMenu(false)}
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
          className={`listItem`} onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy
          smooth
          offset={-40}
          duration={500}
          className={`listItem`} onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
