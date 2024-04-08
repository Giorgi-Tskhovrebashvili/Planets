import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import {
  Menu,
  Arrow,
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Saturn,
  Uranus,
  Venus,
} from "../../assets";

const MobileHeader = () => {
  const [show, setShow] = useState(false);

  const toggleButton = () => setShow(!show);

  return (
    <div className={styles.mobileContainer}>
      <header className={styles.mobileHeader}>
        <Link to="/" className={styles.link}>
          THE PLANETS
        </Link>
        <button onClick={toggleButton}>
          <img className={styles.planetIcon} src={Menu} alt="" />
        </button>
      </header>
      {show && (
        <ul className={styles.menu}>
          <li>
            <Link to="/Mercury" className={styles.planetName}>
              <div className={styles.div}>
                <img className={styles.planetIcon} src={Mercury} alt="" />
                Mercury
              </div>
              <img className={styles.arrowIcon} src={Arrow} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Venus" className={styles.planetName}>
              <div className={styles.div}>
                <img className={styles.planetIcon} src={Venus} alt="" />
                Venus
              </div>
              <img className={styles.arrowIcon} src={Arrow} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Earth" className={styles.planetName}>
              <div className={styles.div}>
                <img className={styles.planetIcon} src={Earth} alt="" />
                Earth
              </div>
              <img className={styles.arrowIcon} src={Arrow} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Mars" className={styles.planetName}>
              <div className={styles.div}>
                <img className={styles.planetIcon} src={Mars} alt="" />
                Mars
              </div>
              <img className={styles.arrowIcon} src={Arrow} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Jupiter" className={styles.planetName}>
              <div className={styles.div}>
                <img className={styles.planetIcon} src={Jupiter} alt="" />
                Jupiter
              </div>
              <img className={styles.arrowIcon} src={Arrow} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Saturn" className={styles.planetName}>
              <div className={styles.div}>
                <img className={styles.planetIcon} src={Saturn} alt="" />
                Saturn
              </div>
              <img className={styles.arrowIcon} src={Arrow} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Uranus" className={styles.planetName}>
              <div className={styles.div}>
                <img className={styles.planetIcon} src={Uranus} alt="" />
                Uranus
              </div>
              <img className={styles.arrowIcon} src={Arrow} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/Neptune" className={styles.planetName}>
              <div className={styles.div}>
                <img className={styles.planetIcon} src={Neptune} alt="" />
                Neptune
              </div>
              <img className={styles.arrowIcon} src={Arrow} alt="" />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default MobileHeader;
