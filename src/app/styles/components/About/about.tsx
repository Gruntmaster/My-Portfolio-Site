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
              Hello there! I'm Ramzi, a
              <strong>Frontend / Fullstack-Jamstack</strong> web developer based
              near Montreal. I wake up in the morning, grab a cup of timmies
              coffee, open up my laptop and build things that live on the web
              all day, everyday.
            </p>
            <p className={styles.about__description}>
              People who know me say I'm obsessed, that's fair, I am very driven
              and love learning new things.
            </p>
            <p className={styles.about__description}>
              I recently created a YouTube channel called
              <a>Slaying The Dragon</a> where I upload videos on front-end web
              development topics.
            </p>
            <hr className={styles.about__hr} />
            <h3 className={styles.about__subtitle}>Technologies</h3>
            <div className={styles.about__ul_container}>
              <ul className={styles.about__ul}>
                <li className={styles.about__list}>
                  JavaScript(ES6+)/Typescript
                </li>
                <li className={styles.about__list}>CSS</li>
                <li className={styles.about__list}>HTML</li>
              </ul>
              <ul className={styles.about__ul}>
                <li className={styles.about__list}>ReactJS</li>
                <li className={styles.about__list}>NextJS</li>
                <li className={styles.about__list}>TailwindCSS</li>
              </ul>
            </div>
          </div>
          <div className={styles.about__img_wrapper}>
            <div className={styles.about__img}>
              <Image
                className={`my-element ${lazyLoadingClass}`}
                src="https://via.placeholder.com/720"
                data-src="/about.jpg"
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
