import React from "react";
import styles from "./about.module.css";
import globalStyles from "@/app/utils.module.css";
import lazyLoading from "@/app/utils/lazy-loading";
import Image from "next/image";

const About: React.FC = () => {
  const lazyLoadingClass = lazyLoading();
  const aspectRatioWidth = 900;
  const aspectRatioHeight = (9 / 16) * aspectRatioWidth;
  return (
    <section id="about" className={globalStyles.section}>
      <div className={globalStyles.container}>
        <div className={styles.about}>
          <div className={styles.about__content}>
            <h2 className={styles.about__title}>O mnie</h2>
            <p className={styles.about__description}>
              Witam! Jestem Andrii, a
              <strong> Frontend / Fullstack-Jamstack</strong> dla programistów
              internetowych we Wrocławiu. Budzę się rano, biorę filiżankę kawę,
              otwieram laptopa i próbuję stworzyć nowe rzeczy, które będą
              transmitowane na żywo w Internecie na zawsze. Każdego dnia po
              pracy próbuję nauczyć się czegoś nowego.
            </p>
            <p className={styles.about__description}>
              Ludzie, którzy mnie znają, mówią, że mam obsesję, to sprawiedliwe,
              jestem bardzo zdeterminowany i uwielbiam uczyć się nowych rzeczy.
              A programowanie jest najbardziej ekscytujące w moim życiu, nawet
              jeśli czasami jest trudne.
            </p>
            <p className={styles.about__description}>
              Zacząłem programować, gdy przyjaciel polecił mi spróbować. Powiem
              szczerze, że było to bolesne, ale teraz, gdy czas minął,
              zrozumiałem, że to wspaniała sfera, w której można się rozwijać,
              ponieważ ekscytujące jest obserwowanie i bycie na krawędzi postępu
              technologicznego.
            </p>
            <hr className={styles.about__hr} />
            <h3 className={styles.about__subtitle}>Technologii</h3>
            <div className={styles.about__ul_container}>
              <ul className={styles.about__ul}>
                <li className={styles.about__list}>JavaScript(ES6+)</li>
                <li className={styles.about__list}>Typescript</li>
                <li className={styles.about__list}>CSS</li>
              </ul>
              <ul className={styles.about__ul}>
                <li className={styles.about__list}>HTML</li>
                <li className={styles.about__list}>ReactJS</li>
                <li className={styles.about__list}>NextJS</li>
              </ul>
            </div>
            <div className={styles.about__ul_container}>
              <ul className={styles.about__ul}>
                <li className={styles.about__list}>TailwindCSS</li>
                <li className={styles.about__list}>C#</li>
                <li className={styles.about__list}>.NET</li>
              </ul>
              <ul className={styles.about__ul}>
                <li className={styles.about__list}>MSSQL</li>
                <li className={styles.about__list}>Postman</li>
                <li className={styles.about__list}>Docker</li>
              </ul>
            </div>
          </div>
          <div className={styles.about__img_wrapper}>
            <div className={styles.about__img}>
              <Image
                className={`my-element ${lazyLoadingClass}`}
                src="/about.png"
                alt="Profile picture"
                width={aspectRatioWidth}
                height={aspectRatioHeight}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
