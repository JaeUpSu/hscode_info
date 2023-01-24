import styles from "./nav.module.css";
import { Link } from "react-scroll";

function Nav() {
  const logging = () => {
    console.log("click");
  };

  return (
    <>
      <nav class="shadow-sm navbar navbar-expand-lg bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#" onClick={logging}>
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
                <Link to="1" spy={true} smooth={true}>
                  <a
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    It's Me
                  </a>
                </Link>
              </li>
              <li class="nav-item" className={styles.nav_item}>
                <Link to="2" spy={true} smooth={true}>
                  <a class="nav-link text-light" href="#">
                    Port-Folio
                  </a>
                </Link>
              </li>
              <li class="nav-item" className={styles.nav_item}>
                <Link to="3" spy={true} smooth={true}>
                  <a class="nav-link text-light" href="#">
                    Linked-in
                  </a>
                </Link>
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
