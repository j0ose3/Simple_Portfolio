import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import contactImg from '../../assets/contact.png';
import {Link} from "react-scroll";


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="logo" className={`${styles.logo}`} />
      <div className={styles.desktopMenu}>
        <Link className={styles.desktopMenuListItem}>Home</Link>
        <Link className={styles.desktopMenuListItem}>About</Link>
        <Link className={styles.desktopMenuListItem}>Portfolio</Link>
      </div>
      <button className={styles.desktopMenuBtn}>
        <img src={contactImg} alt="" className={styles.desktopMenuImg} /> Contact Me
      </button>
    </div>
  );
};

export default Navbar;
