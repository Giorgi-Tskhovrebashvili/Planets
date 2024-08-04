import { ButtonType } from "../../types";
import styles from "./Button.module.css";

const Button = ({ number, linkName, className }: ButtonType) => {
  return (
    <button className={className}>
      <p className={styles.number}>{number}</p>
      <p className={styles.name}>{linkName}</p>
    </button>
  );
};

export default Button;
