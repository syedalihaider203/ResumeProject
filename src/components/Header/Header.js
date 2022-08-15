import React from "react";

import resumeSvg from "../../assets/resume.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Looking for <span>Free Resume</span> that Outstands the Company!
        </p>
        <p className={styles.heading}>
          You are at right place. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
