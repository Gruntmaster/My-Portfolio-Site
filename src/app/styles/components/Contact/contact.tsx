import React from "react";
import styles from "./contact.module.css";
import globalStyles from "@/app/utils.module.css";

const Features: React.FC = () => {
  return (
    <section id="contact" className={globalStyles.container}>
      <div className={globalStyles.section}>
        <div className={styles.contact}>
          <h2 className={styles.contact__title}>Get In Contact</h2>
          <p className={styles.contact__description}>
            Whether you are starting a project, have business inquiries or just
            want to say hi, my inbox is always open so feel free to reach out
            and I will get back to you as soon as possible.
          </p>
          <div className={styles.contact__btn}>
            <a
              className={globalStyles.btn}
              href="mailto:andrew.horlanov@gmail.com"
              target="_blank"
            >
              React Out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
