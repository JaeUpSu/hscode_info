import { useState } from "react";
import styles from "./itsme.module.css";
import ItsMeBg from "./ItsMeBg";

function ItsMe() {
  const [modify, setModify] = useState(false);

  return (
    <div className={styles.itsme_container}>
      <h1 id="1" className={styles.itsme_label}>
        Its Me
      </h1>

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
          <div class="accordion-item mx-5 my-2 border border-dark border-3">
            <h2
              class="accordion-header p-2"
              id="headingOne"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              className={styles.itsme_accordion_header}
            >
              <button
                class="accordion-button .bg-light.bg-gradient text-dark"
                className={styles.itsme_accordion_label}
                aria-expanded="false"
                aria-controls="collapseOne"
                onMouseEnter={() => {
                  setModify(true);
                }}
                onMouseLeave={() => {
                  setModify(false);
                }}
              >
                개발자를 마음 먹게된, 나의 개발 경험 (+ 협업){" "}
                {/* <code class={modify ? "visible ms-5" : "invisible"}>수정</code> */}
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
                <strong>
                  저의 개발자의 시작을 하게 된 방아쇠는 졸업작품을 만들면서
                  당겨졌습니다.
                </strong>
                <br />
                진로를 정하지 못하고 4학년 1학기가 된 저는 컴공 전공자로
                졸업작품을 만들어야 했습니다. 첫 졸업작품 관련 OT를 듣고 혼자
                개발을 하는 것보다 마음이 맞는 동료와 하는 것이 좋을 것 같아
                동기에게 협업을 제안했습니다.
                <br />
                <br />
                저희의 졸업작품의 첫 주제는 <code>다이어트</code>였습니다.
                이유는 가장 대중적으로 사람들이 관심 있는 주제를 선정하자는
                것이었고 여지없이 첫 발표 때 식상한 아이템에 식상한 기능을 들고
                와서 교수님께 혹평을 들었습니다. 신선한 메인 기능과 디테일한
                주제가 필요했습니다.
                <br />
                <br />
                여러 기능이 있었지만, MAP 기능을 집중해서 개발하다 보니 동료와
                여러 회의 끝에 다이어트 앱이 아닌 <code>러닝</code> 앱으로
                방향을 틀었습니다. 이후 이 기능을 발전시켜
                <br />
                자기가 걸었던 거리와 시간을 고려한 여러 데이터를 시각적으로
                정확하게 표현하고 사용자의 관심을 끌기 위해 Kalman-Filter와
                DBSCAN-Clustering 그리고 DMACA 등 공식을 알려주는 논문들을
                참고했습니다. 이후 해당 러닝 기록을 남겨 타인과의 경쟁 또한
                가능한 차별점을 가진 APP 을 만들게 되었습니다.
                <br />
                <br />
                이 과정에서 자연스럽게 각자 FRONT와 BACK을 맡아 개발을
                진행했습니다. 이 과정에 동료와 협업하는 것과 매일 같이 코딩하는
                것에 재미를 붙였고 최종 발표 때는 저희 결과물이 교수님의 관심을
                끌고 혹평이 아닌 꽤나 호평받게 되었습니다.
                <br />
                <br />
                <strong>
                  이 여정을 통해 저의 진로를 풀스택 개발자로 정했습니다.
                </strong>
              </div>
            </div>
          </div>
          <div class="accordion-item mx-5 my-2 border border-dark border-3">
            <h2
              class="accordion-header p-2"
              id="headingTwo"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              className={styles.itsme_accordion_header}
            >
              <button
                class="accordion-button collapsed .bg-light.bg-gradient text-dark"
                className={styles.itsme_accordion_label}
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                CS지식과 기술적 역량
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
          <div class="accordion-item mx-5 my-2 border border-dark border-3">
            <h2
              class="accordion-header p-2"
              id="headingThree"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              className={styles.itsme_accordion_header}
            >
              <button
                class="accordion-button collapsed .bg-light.bg-gradient text-dark"
                className={styles.itsme_accordion_label}
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                앞으로의 방향성
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                class="accordion-body bg-light"
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
