import styles from "./portfolio.module.css";

function PortFolio() {
  return (
    <div id="2" className={styles.portfolio}>
      <h1 className={styles.portfolio_label}>Port-Folio</h1>
      <div class="support-grid"></div>

      <div className={styles.band}>
        <div className={styles.item_1}>
          <a
            href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
            className={styles.card}
          >
            <div
              className={`${styles.card_thumb} ${styles.card_thumb_one}`}
            ></div>
            <article className={styles.card_article}>
              <h1 className={styles.card_title}>
                Introduce how much you are needed: My info
              </h1>
              <span className={styles.card_cat}>Web (React & Django)</span>
            </article>
          </a>
        </div>
        <div class="item-2">
          <a
            href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045"
            className={styles.card}
          >
            <div
              className={`${styles.card_thumb} ${styles.card_thumb_two}`}
            ></div>
            <article className={styles.card_article}>
              <h1 className={styles.card_title}>
                Let's run together: Runner 8
              </h1>
              <span className={styles.card_cat}>App (Android & FireBase)</span>
            </article>
          </a>
        </div>
        <div class="item-3">
          <a
            href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
            className={styles.card}
          >
            <div
              className={`${styles.card_thumb} ${styles.card_thumb_three}`}
            ></div>
            <article className={styles.card_article}>
              <h1 className={styles.card_title}>
                Created by You, July Edition
              </h1>
              <p className={styles.card_text}>
                Welcome to our monthly feature of fantastic tutorial results
                created by you, the Envato Tuts+ community!{" "}
              </p>
              <span className={styles.card_cat}>Melody Nieves</span>
            </article>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
