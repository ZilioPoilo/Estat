import styles from "./why-us.module.scss";
import {CiAlignBottom, CiBank, CiMicrochip, CiReceipt} from "react-icons/ci";

const WhyUs = () => {
  return(
    <>
      <div className={styles.container}>
        <div className={styles.caption}>
          <h1>
            WHY CHOOSE US
          </h1>
          <p>We understand that every client is unique, and so are their requirements.<br></br>We take the time to listen
            attentively to your preferences, priorities, and lifestyle</p>
        </div>
        <div className={styles.reasons}>
          <div className={styles.reason}>
            <div className={styles.sign}>
              <CiAlignBottom/>
            </div>
            <h1>Fast listing</h1>
            <p>Complete your listing in minutes, and it`ll be listed likely in 1 business day.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.sign}>
              <CiBank/>
            </div>
            <h1>No Hidden Fees</h1>
            <p>Save an average of $15,000 selling your home. 0% seller agent commission.</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.sign}>
              <CiMicrochip/>
            </div>
            <h1>Cutting Edge Tech</h1>
            <p>Complete your listing paperwork, make changes to your listing, even</p>
          </div>
          <div className={styles.reason}>
            <div className={styles.sign}>
              <CiReceipt/>
            </div>
            <h1>Easy Seller Disclosures</h1>
            <p>Documentation is the FSBO concern.<br></br> We`ve made filling seller</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;