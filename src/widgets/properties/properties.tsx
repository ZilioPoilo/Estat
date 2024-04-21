import {FC} from "react";
import styles from "./properties.module.scss";
import house1 from "../../assets/house1.jpg";
import house2 from "../../assets/house2.jpg";
import house3 from "../../assets/house3.jpg";
import Card from "../../shared/card/card.tsx";

const Properties: FC = () => {
  return (
    <>
      <div id={"features"} className={styles.container}>
        <div className={styles.caption}>
          <h1>
            FEATURED PROPERTIES
          </h1>
          <p>Explore our handpicked selection of exquisite featured properties that epitomize luxury, elegance, and styl
            e Each residence has been thoughfully.</p>
        </div>
        <div className={styles.cards}>
          <Card image={house1}/>
          <Card image={house2}/>
          <Card image={house3}/>
        </div>
      </div>
    </>
  );
}

export default Properties;