import styles from "./itsme.module.css";
import ItsMeBg from "./ItsMeBg";

function ItsMe() {
  return (
    <div id="1" className={styles.itsme_container}>
      <h1 className={styles.itsme_label}>Its Me</h1>

      <p className={styles.view_description}>
        The things flying on the screen are skills I know how to do.
      </p>

      <ItsMeBg />

      <div className={styles.itsme_body}>
        <p className={styles.itsme_info}>
          I'am Back-End Developer.
          <br />
          My Goal is Full-stack Developer.
          <br />
          Of course, I still know how to play front.
        </p>
        <div class="accordion my-5" id="accordionExample">
          <div class="accordion-item mx-5">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button .bg-light.bg-gradient text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                기
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                class="accordion-body"
                className={styles.itsme_accordion_body}
              >
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item mx-5">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed .bg-light.bg-gradient text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                승
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                class="accordion-body"
                className={styles.itsme_accordion_body}
              >
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item mx-5">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed .bg-light.bg-gradient text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                전
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                class="accordion-body"
                className={styles.itsme_accordion_body}
              >
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item mx-5">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed .bg-light.bg-gradient text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                결
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div
                class="accordion-body"
                className={styles.itsme_accordion_body}
              >
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItsMe;
