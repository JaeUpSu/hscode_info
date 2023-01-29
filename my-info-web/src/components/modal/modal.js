import styles from "./modal.module.css";

function Modal() {
  return (
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
  );
}

export default Modal;
