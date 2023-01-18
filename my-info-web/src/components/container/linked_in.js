import styles from "./linked_in.module.css";

function Linked_In() {
  return (
    <div className={styles.linked_box}>
      <ul class="linked_list" className={styles.linked_list}>
        <li class="linked_item" className={styles.linked_item}>
          <button type="button" class="btn btn-success">
            Velog
          </button>
        </li>
        <li class="linked_item" className={styles.linked_item}>
          <button type="button" class="btn btn-dark">
            GitHub
          </button>
        </li>
        <li class="linked_item" className={styles.linked_item}>
          <button type="button" class="btn btn-light">
            Instagram
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Linked_In;
