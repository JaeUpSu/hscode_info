import styles from "./linked_in.module.css";
import icons from "./icons.js";

function Linked_In() {
  return (
    <div className={styles.linked_box}>
      <ul class="linked_list" className={styles.linked_list}>
        <li class="linked_item" className={styles.linked_item}>
          <button type="button" class="btn btn-dark">
            <img className={styles.linked_img} src={icons[10]}></img>
          </button>
        </li>
        <li class="linked_item" className={styles.linked_item}>
          <button type="button" class="btn btn-dark">
            <img className={styles.linked_img} src={icons[11]}></img>
          </button>
        </li>
        <li class="linked_item" className={styles.linked_item}>
          <button type="button" class="btn btn-dark">
            <img className={styles.linked_img} src={icons[12]}></img>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Linked_In;
