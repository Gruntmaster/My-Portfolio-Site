import React from "react";
import styles from "./features.module.css";
import globalStyles from "@/app/utils.module.css";
import lazyLoading from "@/app/utils/lazy-loading";
import Image from "next/image";

const Features: React.FC = () => {
  const lazyLoadingClass = lazyLoading();
  const aspectRatioWidth = 900;
  const aspectRatioHeight = (9 / 16) * aspectRatioWidth;
  return (
    <section id="featured" className={globalStyles.section}>
      <div className={globalStyles.container}>
        <h3 className={styles.featured__subtitle}>Wyróżniony projekt</h3>
        <div className={styles.featured__wrapper}>
          <h2 className={styles.featured__title}>Market idea</h2>
          <a
            aria-label="link featured projects"
            className={styles.featured__link}
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </a>
        </div>
        <p className={styles.featured__description}>
          Pracujemy nad tą witryną dla firmy tworzącej programy dla firm.
          Wdrażają wiele różnych rozwiązań, a my chętnie pomagamy im w
          projektowaniu przyszłej strony internetowej
        </p>
        <div className={styles.featured__info_container}>
          <div>
            <h3 className={styles.featured__label}>Tech stack</h3>
            <ul className={styles.featured__tech_stack}>
              <li className={styles.featured__info}>ReactJS</li>
              <li className={styles.featured__info}>React-hook-form</li>
              <li className={styles.featured__info}>NextJS</li>
              <li className={styles.featured__info}>Typescript</li>
              <li className={styles.featured__info}>CSS</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.featured__label}>Project type</h3>
            <p className={styles.featured__info}>Fullstack-Jamstack</p>
          </div>
          <div>
            <h3 className={styles.featured__label}>Timeline</h3>
            <p className={styles.featured__info}>Sierpien 2023 - obecny</p>
          </div>
        </div>
        <div className={styles.featured__img_container}>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="/market-idea1.png"
              alt="Market idea"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="/market-idea2.png"
              alt="Market idea"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="/market-idea3.png"
              alt="Market idea"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="/market-idea4.png"
              alt="Market idea"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="/market-idea5.png"
              alt="Market idea"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="/market-idea8.png"
              alt="Market idea"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="/market-idea6.png"
              alt="Market idea"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="/market-idea7.png"
              alt="Market idea"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
