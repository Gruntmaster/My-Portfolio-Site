import React from "react";
import styles from "./contact.module.css";
import styles2 from "../About/about.module.css";
import globalStyles from "@/app/utils.module.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={globalStyles.container}>
      <div className={globalStyles.section}>
        <div className={styles.contact}>
          <h2 className={styles.contact__title}>Contact</h2>
          <p className={styles.contact__description}>
            I will be very grateful for any cooperation or recruitment for work,
            because beginning is always difficult. Leaving my contact details.
            Ready for action.
          </p>
          <hr className={styles2.about__hr} />
          <div className={styles2.about__ul_container}>
            <ul className={styles.about__ul}>
              <div className={styles2.about__list}>📞793209983</div>
              <div className={styles2.about__list}>
                📧 andrew.horlanov@gmail.com
              </div>
              <div className={styles2.about__list}>🏢Wrocław</div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
