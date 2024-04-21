import {FC} from "react";
import logo from "../../assets/logo.png";
import Button from "../../shared/button/button.tsx";
import styles from "./header.module.scss";


const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo"/>
        <div className={styles.navigate}>
          <button><a href="#welcome">Welcome</a></button>
          <button><a href="#why-us">Why us</a></button>
          <button><a href="#features">Features</a></button>
          <button><a href="#apartments">Apartments</a></button>
        </div>
        <Button color="black" >Contact us</Button>
      </header>
    </>
  );
}

export default Header;