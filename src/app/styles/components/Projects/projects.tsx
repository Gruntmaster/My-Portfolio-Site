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
          <h2 className={styles.work__title}>Projekty</h2>
          <p className={styles.work__description}>
            W tej sekcji napiszę krótko o moich projektach, praktykach, własnych
            aplikacjach, które zostały wykonane lub będą lub są w fazie
            realizacji, więc nie mogę ich jeszcze pokazać
          </p>
          <div className={styles.work__container}>
            {/* <!-- Project 1 --> */}
            <h3 className={styles.work__project_title}>Pierwsza witryna</h3>
            <div className={styles.work__img_wrapper}>
              <div className={styles.work__image1}>
                <Image
                  className={`my-element ${lazyLoadingClass}`}
                  src="/second-site.png"
                  alt="second site"
                  width={aspectRatioWidth} // Replace with the actual width value
                  height={aspectRatioHeight} // Replace with the actual height value
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles.work__content1}>
              <div className={styles.work__project}>
                <h3 className={styles.work__project_subtitle}>
                  Pierwsza witryna
                </h3>
                <p className={styles.work__project_description1}>
                  Pierwsza próba umiejętności
                </p>
                <p className={styles.work__project_description2}>
                  Pierwsza napisana strona jest zawsze okropna, a niektóre z
                  tych pustych miejsc zostały wygenerowane przy użyciu
                  WordPressa, ale każdy zawsze zaczyna od czegoś
                </p>
                <div className={styles.work__project_btn}>
                  <a
                    className={globalStyles.btn}
                    href="https://first-practice-site.netlify.app"
                  >
                    Witryna
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 2 --> */}
            <h3 className={styles.work__project_title}>
              Strona do testowania stylu
            </h3>
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
                  Strona testowa
                </h3>
                <p className={styles.work__project_description1}>
                  Testowaliśmy tutaj różne style i mechanikę TypeScript/JS
                </p>
                <p className={styles.work__project_description2}>
                  Platforma do testowania, napisana z myślą o udoskonalaniu
                  stylów CSS oraz testowaniu funkcji TypeScriptu i Frameworków
                </p>
                <div className={styles.work__project_btn}>
                  <a
                    className={globalStyles.btn}
                    href="https://pracawokolicy-next-js.netlify.app"
                  >
                    Witryna
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 3 --> */}
            {/*
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
            */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
