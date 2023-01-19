import styles from "./nav.module.css";

function Nav() {
  const logging = () => {
    console.log("click");
  };

  return (
    <>
      <nav class="shadow-sm navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" onClick={logging}>
            Info {"{ "}
            <span className={styles.navbar_brand_identity}>
              {"Write Yourself"}
            </span>
            {" }"}
          </a>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={logging}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" className={styles.nav_item}>
                <a class="nav-link active" aria-current="page" href="#">
                  It's Me
                </a>
              </li>
              <li class="nav-item" className={styles.nav_item}>
                <a class="nav-link" href="#">
                  Linked-in
                </a>
              </li>
              <li class="nav-item dropdown" className={styles.nav_item}>
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Port-Folio
                </a>
                <ul class="dropdown-menu">
                  <li className={styles.nav_item}>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li className={styles.nav_item}>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li className={styles.nav_item}>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
