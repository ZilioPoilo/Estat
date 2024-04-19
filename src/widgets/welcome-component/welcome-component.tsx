import {FC} from "react";
import styles from "./welcome-component.module.scss";

const WelcomeComponent: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="mt-20 mt flex flex-row justify-between items-center w-full">
          <div className={styles.sector1}>
            <p>WELCOME TO YOUR<br></br>FUTURE LUXURY HOME</p>
          </div>
          <div className={styles.sector2}>
            <p>Step into a world of endless possibilities and explore the epitome of refined living. We take great pride in curating.</p>
            <div className={styles.lowerSector}>
              <button>
                Discover now
              </button>
              <p>Learn more</p>
            </div>
          </div>
        </div>

        <div className={styles.pictures}>

        </div>

      </div>
    </>
  );
}

export default WelcomeComponent;