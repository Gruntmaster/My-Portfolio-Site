import React from "react";
import styles from "./profile.module.css";
import globalStyles from "@/app/utils.module.css";

const Profile: React.FC = () => {
  return (
    <section className={globalStyles.container}>
      <div className={styles.hero}>
        <img
          className={styles.hero__img}
          src="/profile.jpg"
          alt="Profile picture"
        />
        <h2 className={styles.hero__subtitle}>
          Dzień dobry, Jestem Andrii Horlanov 👋
        </h2>
        <h1 className={styles.hero__title}>
          Junior FRONT-END <br />
          DEVELOPER
        </h1>
        <p className={styles.hero__description}>
          A passionate <strong>Frontend / Fullstack-Jamstack</strong> web
          developer and <strong>UI/UX</strong>
          enthusiast specialized in building stunning pixel-perfect interactive
          websites/applications
        </p>
        <div className={styles.hero__btn}>
          <a className={globalStyles.btn} href="#">
            Reach out
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
