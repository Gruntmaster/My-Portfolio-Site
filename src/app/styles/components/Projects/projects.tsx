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
            Mollit pariatur tempor nisi dolor non consequat magna cupidatat
            reprehenderit. Aliquip excepteur ullamco aliquip magna est et
            commodo deserunt ipsum.
          </p>
          <div className={styles.work__container}>
            {/* <!-- Project 1 --> */}
            <h3 className={styles.work__project_title}>Wax Motif</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image1}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="https://via.placeholder.com/900"
                  data-src="/waxmoney.png"
                  alt="Wax Motif website"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>

            <div className={styles.work__content1}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>Wax Motif</h3>
                <p className={styles.work__project_description1}>
                  Labore magna ut non labore Lorem nisi culpa sint et quis sint.
                  Enim pariatur deserunt do ad exercitation.
                </p>
                <p className={styles.work__project_description2}>
                  Ea ut non cupidatat consequat sint elit ipsum culpa dolor
                  cillum commodo. Do esse excepteur cillum deserunt duis
                  incididunt. Eu tempor ullamco aliqua consectetur incididunt
                  anim dolor sunt laboris adipisicing cupidatat sint.
                </p>
                <div className={styles.work__project_btn}>
                  <a className={globalStyles.btn} href="#">
                    Website
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Project 2 --> */}
            <h3 className={styles.work__project_title}>Draze Force</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image2}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="https://via.placeholder.com/900"
                  data-src="/drazeforce.png"
                  alt="Draze Force website"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.work__content2}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>Wax Motif</h3>
                <p className={styles.work__project_description1}>
                  Labore magna ut non labore Lorem nisi culpa sint et quis sint.
                  Enim pariatur deserunt do ad exercitation.
                </p>
                <p className={styles.work__project_description2}>
                  Ea ut non cupidatat consequat sint elit ipsum culpa dolor
                  cillum commodo. Do esse excepteur cillum deserunt duis
                  incididunt. Eu tempor ullamco aliqua consectetur incididunt
                  anim dolor sunt laboris adipisicing cupidatat sint.
                </p>
                <div className={styles.work__project_btn}>
                  <a className={globalStyles.btn} href="#">
                    Website
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Project 3 --> */}
            <h3 className={styles.work__project_title}>Artren</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image3}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="https://via.placeholder.com/900"
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
                <h3 className={styles.work__project_subtitle}>Artren</h3>
                <p className={styles.work__project_description1}>
                  Aliquip eu ad est reprehenderit veniam irure exercitation in
                  velit enim ipsum.
                </p>
                <p className={styles.work__project_description2}>
                  Elit est amet quis incididunt officia velit eiusmod do amet.
                  Sint non qui nulla sit ex cillum non pariatur velit proident
                  ut aliqua fugiat incididunt id minim.
                </p>
                <div className={styles.work__project_btn}>
                  <a className={globalStyles.btn} href="#">
                    Website
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Project 4 --> */}
            <h3 className={styles.work__project_title}>Platform Pro</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image4}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="https://via.placeholder.com/900"
                  data-src="/platformpro.png"
                  alt="Platform Pro website"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.work__content4}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>Platform Pro</h3>
                <p className={styles.work__project_description1}>
                  Labore magna ut non labore Lorem nisi culpa sint et quis sint.
                  Enim pariatur deserunt do ad exercitation.
                </p>
                <p className={styles.work__project_description2}>
                  Ea ut non cupidatat consequat sint elit ipsum culpa dolor
                  cillum commodo. Do esse excepteur cillum deserunt duis
                  incididunt. Eu tempor ullamco aliqua consectetur incididunt
                  anim dolor sunt laboris adipisicing cupidatat sint.
                </p>
                <div className={styles.work__project_btn}>
                  <a className={globalStyles.btn} href="#">
                    Website
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Project 5 --> */}
            <h3 className={styles.work__project_title}>Wallys Vegan</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image5}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="https://via.placeholder.com/900"
                  data-src="/wallysvegan.png"
                  alt="Wallys Vegan website"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.work__content5}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>Wallys Vegan</h3>
                <p className={styles.work__project_description1}>
                  Sunt sint labore officia irure. Dolore pariatur nisi deserunt
                  sunt exercitation excepteur do reprehenderit fugiat Lorem sint
                  ut.
                </p>
                <p className={styles.work__project_description2}>
                  Mollit ipsum mollit magna occaecat eiusmod sint fugiat est non
                  adipisicing esse fugiat deserunt minim. Enim occaecat velit eu
                  non amet nostrud officia duis.
                </p>
                <div className={styles.work__project_btn}>
                  <a className={globalStyles.btn} href="#">
                    Website
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Project 6 --> */}
            <h3 className={styles.work__project_title}>Old Portfolio</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image6}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="https://via.placeholder.com/900"
                  data-src="/portfolio.png"
                  alt="Portfolio website"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.work__content6}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>Old Portfolio</h3>
                <p className={styles.work__project_description1}>
                  Aliquip eu ad est reprehenderit veniam irure exercitation in
                  velit enim ipsum.
                </p>
                <p className={styles.work__project_description2}>
                  Elit est amet quis incididunt officia velit eiusmod do amet.
                  Sint non qui nulla sit ex cillum non pariatur velit proident
                  ut aliqua fugiat incididunt id minim.
                </p>
                <div className={styles.work__project_btn}>
                  <a className={globalStyles.btn} href="#">
                    Website
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
