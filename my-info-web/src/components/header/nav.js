import styles from "./nav.module.css";
import { useState } from "react";
import { Link } from "react-scroll";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logging = () => {
    console.log("click");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white fixed-top shadow p-2 px-4 mb-5 bg-body">
        <div class="container-fluid">
          <a class="navbar-brand text-dark" href="#" onClick={logging}>
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
              <li class="nav-item">
                <Link to="1" spy={true} smooth={true}>
                  <a
                    class="nav-link text-dark"
                    className={styles.nav_link}
                    aria-current="page"
                    href="#"
                  >
                    It's Me
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="2" spy={true} smooth={true}>
                  <a
                    class="nav-link text-dark"
                    href="#"
                    className={styles.nav_link}
                  >
                    Port-Folio
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="3" spy={true} smooth={true}>
                  <a
                    class="nav-link text-dark"
                    href="#"
                    className={styles.nav_link}
                  >
                    Linked-in
                  </a>
                </Link>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>

            <form class="d-flex">
              <Button
                className="btn"
                variant="text-dark bg-dark text-white border-dark"
                onClick={handleShow}
              >
                Contact Me !!!
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  If you have any requests for me, please contact me here.
                  <div class="mb-3">
                    <label
                      for="recipient-name"
                      class="col-form-label"
                      className={styles.modal_lebel}
                    >
                      Username:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="tel-text" class="col-form-label">
                      tel:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-tel"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email-text" class="col-form-label">
                      Email:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-email"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      Message:
                    </label>
                    <textarea
                      class="form-control"
                      className={styles.modal_area}
                      id="message-text"
                    ></textarea>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="btn_close"
                    variant="secondary"
                    onClick={handleClose}
                  >
                    닫기
                  </Button>
                  <Button variant="btn btn-primary">Send message</Button>
                </Modal.Footer>
              </Modal>
            </form>
          </div>
        </div>
      </nav>
      <Modal />
    </>
  );
}

export default Nav;
