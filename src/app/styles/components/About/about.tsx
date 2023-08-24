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
            <h2 className={styles.about__title}>About</h2>
            <p className={styles.about__description}>
              Hello! I am Andrii, a<strong> Frontend / Fullstack</strong>
              developer. I wake up in the morning, take a cup of coffee, open my
              laptop and try to create new things that will live in the internet
              forever. Every day after work I am trying to learn something new.
            </p>
            <p className={styles.about__description}>
              People who know me say I am obsessed, it is fair I am very
              determined and love to learn new things. And programming is the
              most exciting one in my life, even if it is hard sometimes.
            </p>
            <p className={styles.about__description}>
              I started programming when a friend recommended me to give it a
              try. I will tell honestly it was painful but now when time has
              passed it is more and more pleasant, I understood that this is a
              wonderful sphere in which you can develop, because it is exciting
              to watch how your application help people each day and also be on
              the edge of technological progress.
            </p>
            <hr className={styles.about__hr} />
            <h3 className={styles.about__subtitle}>Technologies</h3>
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
