import styles from "./portfolio.module.css";
import Circles from "./Circles";

function PortFolio() {
  return (
    <div id="2" className={styles.portfolio}>
      <h1 className={styles.portfolio_label}>Port-Folio</h1>
      <div
        class="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          checked
        />
        <label className={styles.portfolio_btn} for="btnradio1">
          Runner 8
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
        />
        <label className={styles.portfolio_btn} for="btnradio2">
          WCW
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
        />
        <label className={styles.portfolio_btn} for="btnradio3">
          Shopping
        </label>
      </div>
    </div>
  );
}

export default PortFolio;
