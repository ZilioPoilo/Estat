import {FC} from "react";
import logo from "../../assets/logo.png";
import styles from "./header.module.scss";


const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo"/>
        <div className={styles.navigate}>
          <button>Welcome</button>
          <button>Why us</button>
          <button>Features</button>
          <button>Apartments</button>
        </div>
        <button>Contact us</button>
      </header>
    </>
  );
}

export default Header;