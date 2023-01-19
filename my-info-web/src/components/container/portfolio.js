import styles from "./portfolio.module.css";

function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      class="carousel slide carousel-fade w-65"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/E816/production/_128341495_erlinghaaland.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 className={styles.carousel_title}>First slide label</h1>
            <h4>
              Some representative placeholder content for the first slide.
            </h4>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/E622/production/_128341985_italiansupercup.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 className={styles.carousel_title}>Second slide label</h1>
            <h4>
              Some representative placeholder content for the second slide.
            </h4>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/134F8/production/_128269097_marcusrashford.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 className={styles.carousel_title}>Third slide label</h1>
            <h4>
              Some representative placeholder content for the third slide.
            </h4>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function PortFolio() {
  return (
    <div className={styles.portfolio}>
      <Carousel />
    </div>
  );
}

export default PortFolio;
