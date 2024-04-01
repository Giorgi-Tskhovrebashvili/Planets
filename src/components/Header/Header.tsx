import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.Header}>
        <ul>
          <li>
            <Link to="/" className={styles.link}>THE PLANETS</Link>
          </li>
          <li>
            <Link to="/Mercury">Mercury</Link>
          </li>
          <li>
            <Link to="/Venus">Venus</Link>
          </li>
          <li>
            <Link to="/Earth">Earth</Link>
          </li>
          <li>
            <Link to="/Mars">Mars</Link>
          </li>
          <li>
            <Link to="/Jupiter">Jupiter</Link>
          </li>
          <li>
            <Link to="/Saturn">Saturn</Link>
          </li>
          <li>
            <Link to="/Uranus">Uranus</Link>
          </li>
          <li>
            <Link to="/Neptune">Neptune</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
