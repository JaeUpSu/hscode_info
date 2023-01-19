import styles from "./profile.module.css";

function Profile() {
  return (
    <div className={styles.profile_box}>
      <img
        className={styles.profile_img}
        src="//w.namu.la/s/c9b951140de72f66425f2f5523cd2a4aa0a796a5c67e4c8363782e249d58f9d4fbbd977b1c6fd8d0fcecf5ee70a146619ee15c502a074c547f931384a97d69e5d47069d61f108598b469b0374b6480ca970c720be5cdcc4ab0d6c5e2dcbbc1f3"
      />
      <div className={styles.profile_text_box}>
        <p className={styles.profile_text}>
          Hello, My name is KHS.
          <br />
          I'am Back-End Developer.
          <br />
          <br />
          My Goal is Full-stack Developer.
          <br />
          Of course, I still know how to play front.
        </p>

        <br />
        <p className={styles.profile_text_more}></p>
      </div>
      <div className={styles.lang_box}>
        <ul className={styles.lang_list}>
          <li className={styles.lang_item}>Python</li>
          <li className={styles.lang_item}>Django</li>
          <li className={styles.lang_item}>JavaScript</li>
          <li className={styles.lang_item}>HTML</li>
          <li className={styles.lang_item}>CSS</li>
          <li className={styles.lang_item}>React</li>
          <li className={styles.lang_item}>Java</li>
          <li className={styles.lang_item}>php</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
