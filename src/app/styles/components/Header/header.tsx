"use client";
import React, { useEffect } from "react";
import styles from "./header.module.css";
import globalStyles from "@/app/utils.module.css";
import darkMode from "@/app/utils/dark-mode";

const Header: React.FC = () => {
  useEffect(() => {
    darkMode(); // Call the darkMode function when the component mounts
  }, []);

  return (
    <header className={globalStyles.container}>
      <div className={styles.header}>
        <nav>
          <ul className={styles.header__menu}>
            <li>
              <a className={styles.header__link} href="#about">
                O mnie
              </a>
            </li>
            <li>
              <a className={styles.header__link} href="#featured">
                Praca
              </a>
            </li>
            <li>
              <a className={styles.header__link} href="#contact">
                Kontakt
              </a>
            </li>
            <li className={styles.header__line}></li>
            <li>
              <button id="theme_toggle" className={styles.header__sun}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            </li>
            <li>
              <div className={styles.header__resume}></div>
              <a className={globalStyles.btn} href="#">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
