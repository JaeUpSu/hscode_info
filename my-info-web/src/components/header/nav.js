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

            <form class="d-flex">
              <button
                class="btn btn-outline-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
              >
                Contact Me !!!
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div
        class="modal fade"
        id="exampleModal"
        aria-hidden="true"
        aria-labelledby="exampleModalLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Request
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              If you have any requests for me, please contact me here.
              <div class="mb-3">
                <label
                  for="recipient-name"
                  class="col-form-label"
                  className={styles.modal_lebel}
                >
                  Username:
                </label>
                <input type="text" class="form-control" id="recipient-name" />
              </div>
              <div class="mb-3">
                <label for="tel-text" class="col-form-label">
                  tel:
                </label>
                <input type="text" class="form-control" id="recipient-tel" />
              </div>
              <div class="mb-3">
                <label for="email-text" class="col-form-label">
                  Email:
                </label>
                <input type="text" class="form-control" id="recipient-email" />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">
                  Message:
                </label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
