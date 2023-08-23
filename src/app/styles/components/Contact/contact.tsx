import React from "react";
import styles from "./contact.module.css";
import globalStyles from "@/app/utils.module.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={globalStyles.container}>
      <div className={globalStyles.section}>
        <div className={styles.contact}>
          <h2 className={styles.contact__title}>Skontaktuj się</h2>
          <p className={styles.contact__description}>
            Będę bardzo wdzięczna za jakąkolwiek współpracę lub rekrutację do
            pracy, bo początki zawsze są trudne. Zostawiam swój adres e-mail,
            pod którym można bezpośrednio do mnie napisać. Gotowy na akcję.
          </p>
          <div className={styles.contact__btn}>
            <a
              className={globalStyles.btn}
              href="mailto:andrew.horlanov@gmail.com"
              target="_blank"
            >
              Napisz na e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
