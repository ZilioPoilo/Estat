import {FC} from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/logo.png";
import Button from "../../shared/button/button.tsx";

const Footer: FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.verticalContainer}>
          <img src={logo} alt="logo"/>
          <p>More Comfortable.</p>
          <p>More Classy.</p>
        </div>
        <div className={`${styles.verticalContainer} ${styles.links}`}>
          <h1>Product</h1>
          <p>Features</p>
          <p>Integrations</p>
          <p>Pricing</p>
        </div>
        <div className={`${styles.verticalContainer} ${styles.links}`}>
          <h1>Company</h1>
          <p>About us</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
        <div className={`${styles.verticalContainer} ${styles.links}`}>
          <h1>Resources</h1>
          <p>Community</p>
          <p>Contact</p>
          <p>Terms of service</p>
        </div>
        <div className={styles.verticalContainer}>
          <h1>Subscribe Newsletter</h1>
          <div style={{position: "relative"}}>
            <input className={styles.emailInput} name={"email"} placeholder="Email adress" type="text"/>
            <Button className={styles.sendBtn}  color={"green"}>
              Send
            </Button>
          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;