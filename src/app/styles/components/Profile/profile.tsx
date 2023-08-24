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
        <h2 className={styles.hero__subtitle}>Hi, I am Andrii Horlanov 👋</h2>
        <h1 className={styles.hero__title}>
          Junior FRONT-END <br />
          DEVELOPER
        </h1>
        <p className={styles.hero__description}>
          A passionate <strong>Frontend / Fullstack</strong> web developer and{" "}
          <strong>C#/enova 365</strong> enthusiast working with various language
          frameworks to create the first applications for any tasks
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
