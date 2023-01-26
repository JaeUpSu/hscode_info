import { Link } from "react-scroll";
import styles from "./profile.module.css";
import icons from "./icons.js";

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
            <img className={styles.baro_img} src={icons[13]}></img>
          </Link>
          <p className={styles.baro_text}>
            You can't wait to see my works, Click here!!
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
