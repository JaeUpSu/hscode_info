import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={styles.profile_bg}>
        <p className={styles.info}>
          Hi , My name is KHS.
          <br />
          <br />
          <p className={styles.info_more}>
            I'am Back-End Developer.
            <br />
            My Goal is Full-stack Developer.
            <br />
            Of course, I still know how to do front.
          </p>
        </p>
        <div className={styles.baro}>
          <Link to="1" spy={true} smooth={true}>
            <div className={styles.baro_img}></div>
          </Link>
          <p className={styles.baro_text}>
            You can't wait to see my works, Click here!!
          </p>
        </div>
        <p className={styles.view_description}>
          The things flying on the screen are skills I know how to do.
        </p>
      </div>
    </>
  );
};

export default Profile;
