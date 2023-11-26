import React from "react";
import styles from "./project.module.css";
import globalStyles from "@/app/utils.module.css";
import lazyLoading from "@/app/utils/lazy-loading";
import Image from "next/image";

const Projects: React.FC = () => {
  const lazyLoadingClass = lazyLoading();
  const aspectRatioWidth = 900;
  const aspectRatioHeight = (9 / 16) * aspectRatioWidth;
  return (
    <section className={styles.work}>
      <div className={globalStyles.container}>
        <div className={globalStyles.section}>
          <h2 className={styles.work__title}>Projects</h2>
          <p className={styles.work__description}>
            In this section I will write briefly about my projects, practices,
            my own applications that have been made or will be or are in the
            phase of implementation, so I could not show them yet.
          </p>
          <div className={styles.work__container}>
            {/* <!-- Project 1 --> */}
            <h3 className={styles.work__project_title}>First site</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image1}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="/carShowcase900x900.png"
                  alt="Car Hub"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.work__content1}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>Car Showcase</h3>
                <p className={styles.work__project_description1}>
                  Car rent site panel
                </p>
                <p className={styles.work__project_description2}>
                  Site shows many different cars with their rent prices. It has
                  also different types of fuel and year of production which you
                  can select. It uses two different APIs to work with which show
                  car models and show details for every specific car when you
                  click on button View more.
                </p>
                <div className={styles.work__project_btn}>
                  <a
                    className={globalStyles.btn}
                    href="https://car-show-rent-table.netlify.app/"
                  >
                    Site
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 2 --> */}
            <h3 className={styles.work__project_title}>Style test site</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image2}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="/first-site.png"
                  alt="second site"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.work__content2}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>
                  Style test site
                </h3>
                <p className={styles.work__project_description1}>
                  Tested different TypeScript/JS scripts and CSS styles for
                  better understanding
                </p>
                <p className={styles.work__project_description2}>
                  A testing platform, written with improvement in mind CSS
                  styles and testing TypeScript functions with different
                  Frameworks. Useful because I got here my first Next.js
                  impression and experience.
                </p>
                <div className={styles.work__project_btn}>
                  <a
                    className={globalStyles.btn}
                    href="https://first-practice-site.netlify.app"
                  >
                    Site
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 3 --> */}
            <h3 className={styles.work__project_title}>Żabka spreadsheets</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image3}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="/Zabka.png"
                  data-src="/artren.png"
                  alt="Artren website"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.work__content3}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>
                  Tables with working hours for Żabka shops
                </h3>
                <p className={styles.work__project_description1}>
                  Hosted working spreadsheets on remote server
                </p>
                <p className={styles.work__project_description2}>
                  The task was to make online work spreadsheets for workers in
                  Żabka shops in order to optimize blanks filling for shifts and
                  make them better and faster. Besides it is much better to have
                  everything on server then to look for infinity amount of
                  papers.
                </p>
              </div>
            </div>

            {/* <!-- Project 3 --> */}
            <h3 className={styles.work__project_title}>Żabka spreadsheets</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image4}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="/Hack4law_app900x900.png"
                  data-src="/Hack4law_app900x900.png"
                  alt="Hack website"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.work__content4}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>
                  GDPR Risk Extractor Hack4Law edycja III - 22.10.2023
                </h3>
                <p className={styles.work__project_description1}>
                  The product is addressed mainly to lawyers different
                  positions, doing different things law sphere.
                </p>
                <p className={styles.work__project_description2}>
                  This is beta version of the application together this app can
                  be useful for the LegalTech community in Poland and users of
                  applications such as Lex ODO and RiskTracker.
                </p>
                <div className={styles.work__project_btn}>
                  <a
                    className={globalStyles.btn}
                    href="https://youtu.be/CTWZ5ooZ_6w?si=MOtVIR6q3wy5E4XY"
                  >
                    Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
