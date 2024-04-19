import {FC} from "react";
import Button from "../../shared/button/button.tsx";
import styles from "./welcome-component.module.scss";
import cabin from "../../assets/treetop_cabin.jpg"
import men from "../../assets/men.png";

const WelcomeComponent: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headdiv}>
          <div className={styles.sector1}>
            <p>WELCOME TO YOUR<br></br>FUTURE LUXURY HOME</p>
          </div>
          <div className={styles.sector2}>
            <p>Step into a world of endless possibilities and explore the epitome of refined living. We take great pride in curating.</p>
            <div className={styles.lowerSector}>
              <Button color={"green"} className="mr-5" >
                Discover now
              </Button>
              <p>Learn more</p>
            </div>
          </div>
        </div>

        <div className={styles.infoPictures}>
          <div className={styles.infos}>
            <div>
              <h1>200+</h1>
              <p>Property Ready</p>
            </div>
            <div>
              <h1>10K+</h1>
              <p>Happy Customer</p>
            </div>
          </div>
          <div className={styles.pictures}>
            <img className={styles.cabin} src={cabin} alt="treetop cabin"/>
            <img className={styles.men} src={men} alt="men"/>
          </div>
        </div>

      </div>
    </>
  );
}

export default WelcomeComponent;