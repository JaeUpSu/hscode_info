import styles from "./portfolio.module.css";
import PdfDownload from "../../view/PptView";
import styled from "styled-components";

import FeedModal from "../modal/feed_modal";
import { useState } from "react";

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 46px;

  background: #1552f0;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-weight: 700;
  font-size: 18px;
  color: white;

  margin-bottom: 80px;
`;

function PortFolio() {
  const [modalOpen, setModalOpen] = useState(false); //modal창 노출 여부 결정
  const showModal = () => {
    setModalOpen(true); //클릭일때만 오픈
  };
  return (
    <div id="2" className={styles.portfolio}>
      <h1 className={styles.portfolio_label}>Port-Folio</h1>
      <div class="support-grid"></div>

      <div className={styles.band}>
        <div className={styles.item_1}>
          <a className={styles.card}>
            <div
              className={`${styles.card_thumb} ${styles.card_thumb_one}`}
            ></div>
            <article className={styles.card_article}>
              <h1 className={styles.card_title}>
                Introduce how much you are needed
                <br /> <strong>My info</strong>
              </h1>
              <span className={styles.card_cat}>Web (React & Django)</span>
            </article>
          </a>
        </div>
        <div class="item-2">
          <a className={styles.card}>
            <div
              className={`${styles.card_thumb} ${styles.card_thumb_two}`}
            ></div>
            <article className={styles.card_article}>
              <h1 className={styles.card_title}>
                Let's run together
                <br /> <strong>Runner 8</strong>
              </h1>
              <br /> <br />
              <p className={styles.card_text}>
                런닝을 한 후에 기록된 데이터를 통하여 타인과 경쟁도 할 수 있고
                운동량도 알 수 있다. 그리고 다이어트 관련 기능으로 칼로리 사전과
                이 주의 음식과 운동관련 데이터 통계가 있다. <br /> <br />{" "}
                Android Studio 에서 Java 언어를 사용했다. DB는 FireBase에서
                FireStore 를 사용했다.{" "}
              </p>
              <span className={styles.card_cat}>App (Android & FireBase)</span>
              <PdfDownload pdf={"Runner8.pdf"} />
              <Btn onClick={showModal}>Detail</Btn>
              {modalOpen && <FeedModal setModalOpen={setModalOpen} />}
            </article>
          </a>
        </div>
        <div class="item-3">
          <a className={styles.card}>
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
