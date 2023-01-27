import styles from "./linked_in.module.css";
import icons from "./icons.js";

function Linked_In() {
  return (
    <div id="3" className={styles.linked_box}>
      <h1 className={styles.linked_label}>Linked-in</h1>
      <ul class="linked_list" className={styles.linked_list}>
        <li class="linked_item" className={styles.linked_item}>
          <button
            type="button"
            class="btn btn-light"
            onClick={() =>
              window.open(
                `${"https://www.instagram.com/s00_2oo_/"}`,
                "_blank",
                "noopener, noreferrer"
              )
            }
          >
            <img className={styles.linked_img} src={icons[13]}></img>
          </button>
        </li>
        <li class="linked_item" className={styles.linked_item}>
          <button
            type="button"
            class="btn btn-light"
            onClick={() =>
              window.open(
                `${"https://github.com/JaeUpSu"}`,
                "_blank",
                "noopener, noreferrer"
              )
            }
          >
            <img className={styles.linked_img} src={icons[14]}></img>
          </button>
        </li>
        <li
          class="linked_item"
          className={styles.linked_item}
          onClick={() =>
            window.open(
              `${"https://velog.io/@hugh0223"}`,
              "_blank",
              "noopener, noreferrer"
            )
          }
        >
          <button type="button" class="btn btn-light">
            <img className={styles.linked_img} src={icons[15]}></img>
          </button>
        </li>
        <li
          class="linked_item"
          className={styles.linked_item}
          onClick={() =>
            window.open(
              `${"https://www.linkedin.com/in/hyeon-soo-kim-556b8b263/"}`,
              "_blank",
              "noopener, noreferrer"
            )
          }
        >
          <button type="button" class="btn btn-light">
            <img className={styles.linked_img} src={icons[17]}></img>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Linked_In;
