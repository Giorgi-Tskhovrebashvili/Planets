import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <Link to="/" className={styles.link}>THE PLANETS</Link>
        <ul className={styles.menu}>
          <li className={styles.mercury}>
            <Link to="/Mercury">Mercury</Link>
          </li>
          <li className={styles.venus}>
            <Link to="/Venus">Venus</Link>
          </li>
          <li className={styles.earth}>
            <Link to="/Earth">Earth</Link>
          </li>
          <li className={styles.mars}>
            <Link to="/Mars">Mars</Link>
          </li>
          <li className={styles.jupiter}>
            <Link to="/Jupiter">Jupiter</Link>
          </li>
          <li className={styles.saturn}>
            <Link to="/Saturn">Saturn</Link>
          </li>
          <li className={styles.uranus}>
            <Link to="/Uranus">Uranus</Link>
          </li>
          <li className={styles.neptune}>
            <Link to="/Neptune">Neptune</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
