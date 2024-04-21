import {FC, ReactNode} from "react";
import styles from "./card.module.scss";

interface IProps {
  image: ReactNode;
  // create interface for House (price, location, name, beds, baths, sq)
}

const Card: FC<IProps> = (props) => {
  return(
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={props.image} alt=""/>
        </div>
        <div className={styles.info}>
          <div className={styles.general}>
            <h1>$718,250</h1>
            <p>Portland. OR 97219</p>
          </div>
          <h1>Luxury house in Greenville</h1>
          <div className={styles.lowerInfo}>
            <div className={styles.property}>4 Beds</div>
            <div className={`${styles.property} ${styles.incenter}`}>3 Baths</div>
            <div className={styles.property}>2,546 sq.ft</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;