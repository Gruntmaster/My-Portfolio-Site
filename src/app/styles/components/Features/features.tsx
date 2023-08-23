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
        <h3 className={styles.featured__subtitle}>Featured project</h3>
        <div className={styles.featured__wrapper}>
          <h2 className={styles.featured__title}>Slaying The Dragon</h2>
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
          Cillum voluptate tempor cillum culpa cupidatat labore voluptate
          ullamco voluptate culpa sunt nulla non. Ad cupidatat dolore quis amet
          pariatur consectetur ullamco. Officia quis id velit duis cupidatat
          sunt deserunt do aliquip nulla laboris.
        </p>
        <div className={styles.featured__info_container}>
          <div>
            <h3 className={styles.featured__label}>Tech stack</h3>
            <ul className={styles.featured__tech_stack}>
              <li className={styles.featured__info}>TailwindCSS</li>
              <li className={styles.featured__info}>ReactJS</li>
              <li className={styles.featured__info}>React-hook-form</li>
              <li className={styles.featured__info}>NextJS</li>
              <li className={styles.featured__info}>Axios</li>
              <li className={styles.featured__info}>Supabase</li>
              <li className={styles.featured__info}>Stripe</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.featured__label}>Project type</h3>
            <p className={styles.featured__info}>Fullstack-Jamstack</p>
          </div>
          <div>
            <h3 className={styles.featured__label}>Timeline</h3>
            <p className={styles.featured__info}>December 2022 - present</p>
          </div>
        </div>
        <div className={styles.featured__img_container}>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="https://via.placeholder.com/1920x968"
              data-src="/slayingthedragon.png"
              alt="Slaying The Dragon hero"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="https://via.placeholder.com/1920x968"
              data-src="/courses.png"
              alt="Slaying The Dragon courses"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="https://via.placeholder.com/1920x968"
              data-src="/pricing.png"
              alt="Slaying The Dragon pricing"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="https://via.placeholder.com/1920x968"
              data-src="/features.png"
              alt="Slaying The Dragon features"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="https://via.placeholder.com/1920x968"
              data-src="/faq.png"
              alt="Slaying The Dragon faqs"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="https://via.placeholder.com/1920x968"
              data-src="/blog.png"
              alt="Slaying The Dragon blog"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="https://via.placeholder.com/1920x968"
              data-src="/signin.png"
              alt="Slaying The Dragon sign-in"
              width={aspectRatioWidth}
              height={aspectRatioHeight}
              layout="responsive"
            />
          </div>
          <div className={styles.featured__img_wrapper}>
            <Image
              className={`my-element ${lazyLoadingClass}`}
              src="https://via.placeholder.com/1920x968"
              data-src="/app.png"
              alt="Slaying The Dragon dashboard"
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
