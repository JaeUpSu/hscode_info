import styles from "./nav.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Swal from "sweetalert2";
import RequestValidate from "../../validator/request_validate";
import RequestPost from "../../data/request_post";
// import { post_message } from "../../data/slack_bot";

function Nav() {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [show, setShow] = useState(false);

  const [pw, setPw] = useState("");
  const [loginOn, setLoginOn] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    tel: "",
    email: "",
    request: "",
  });

  const handleLoginClose = (e) => {
    // e.preventDefault();
    setLoginModalShow(false);
    document.body.style.overflow = "unset";
  };
  const handleLoginShow = (e) => {
    e.preventDefault();
    setLoginModalShow(true);
    document.body.style.overflow = "hidden";
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeMessage = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "center-center",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const sendMessage = () => {
    if (RequestValidate(message)) {
      return;
    }
    RequestPost(message);
    // sendRequest();
    handleClose();
    Toast.fire({
      icon: "success",
      title: `${message.name}의 메시지를 성공적으로 개발자님께 전달했습니다!`,
    });
  };

  const password = "admin123";

  const onChangePW = (e) => {
    setPw(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    if (password !== pw) {
      alert("비밀번호가 틀렸습니다!");
      return;
    }
    Toast.fire({
      icon: "success",
      title: "성공적으로 로그인!",
    });
    setLoginOn(true);
    handleLoginClose();
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white fixed-top shadow p-2 px-4 mb-5 bg-body">
        <div class="container-fluid">
          <a class="navbar-brand text-dark" href="#" x>
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
              <button
                className={styles.manage_login_key}
                onClick={handleLoginShow}
              >
                🔑
              </button>
              {loginModalShow ? (
                <div className={styles.login_modal_bg}>
                  <div className={styles.login_modal}>
                    <p className={styles.login_label}>Password</p>
                    <input
                      className={styles.login_input}
                      type="password"
                      name="password"
                      onChange={onChangePW}
                    ></input>
                    <div className={styles.login_options}>
                      <button
                        className={styles.login_btn}
                        onClick={handlePassword}
                      >
                        Yes
                      </button>
                      <button
                        className={styles.login_btn}
                        onClick={handleLoginClose}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                " "
              )}
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
                      name="name"
                      onChange={onChangeMessage}
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
                      name="tel"
                      placeholder="- 없이 연락처를 입력해주세요. (선택)"
                      onChange={onChangeMessage}
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
                      name="email"
                      onChange={onChangeMessage}
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
                      name="request"
                      onChange={onChangeMessage}
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
                  <Button variant="btn btn-primary" onClick={sendMessage}>
                    Send message
                  </Button>
                </Modal.Footer>
              </Modal>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
