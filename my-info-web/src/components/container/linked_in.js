import styles from "./linked_in.module.css";
import linked_icons from "../linked_icons";

function Linked_In() {
  return (
    <div id="3">
      <h1 className={styles.linked_label}>Linked-in</h1>
      <ul class="linked_list" className={styles.linked_list}>
        <li className={styles.linked_item}>
          <button
            type="button"
            class="p-0"
            onClick={() =>
              window.open(
                `${"https://www.instagram.com/s00_2oo_/"}`,
                "_blank",
                "noopener, noreferrer"
              )
            }
          >
            <img className={styles.linked_img} src={linked_icons[0]}></img>
          </button>
        </li>
        <li className={styles.linked_item}>
          <button
            type="button"
            class="p-0"
            onClick={() =>
              window.open(
                `${"https://github.com/JaeUpSu"}`,
                "_blank",
                "noopener, noreferrer"
              )
            }
          >
            <img className={styles.linked_img} src={linked_icons[1]}></img>
          </button>
        </li>
        <li
          className={styles.linked_item}
          onClick={() =>
            window.open(
              `${"https://velog.io/@hugh0223"}`,
              "_blank",
              "noopener, noreferrer"
            )
          }
        >
          <button type="button" class="p-0">
            <img className={styles.linked_img} src={linked_icons[2]}></img>
          </button>
        </li>
        <li
          className={styles.linked_item}
          onClick={() =>
            window.open(
              `${"https://www.linkedin.com/in/hyeon-soo-kim-556b8b263/"}`,
              "_blank",
              "noopener, noreferrer"
            )
          }
        >
          <button type="button" class="p-0">
            <img className={styles.linked_img} src={linked_icons[3]}></img>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Linked_In;
