import React from "react";
import styles from "./footer.module.css";
import globalStyles from "@/app/utils.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={globalStyles.section}>
      <div className={globalStyles.container}>
        <div className={styles.footer}>
          <h3 className={styles.footer__title}>~ Andrii Horlanov ~</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
