import styles from "./portfolio.module.css";
import styled from "styled-components";

import FeedModal from "../modal/feed_modal";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Solid from "@fortawesome/free-solid-svg-icons";

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

  margin: 30px 0px;
  position: relative;
  top: 0px;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    background: #1332a0;
    top: -1px;
  }
`;

const SliderBtn = styled.div`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  width: 40px;
  height: 69%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 25px;
  transition: all 300ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

function PortFolio() {
  const modalImgs = [
    "https://images.unsplash.com/photo-1496440543089-3d0eb669f6f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80",
    "https://images.unsplash.com/photo-1619961310056-1f5c8df685d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1503001831666-8f3cf3a24544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1526306063970-d5498ad00f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1552694477-2a18dd7d4de0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  ];

  const pptList = [
    {
      title: "Let's run together",
      name: "Runner 8",
      img: "https://velog.velcdn.com/images/hugh0223/post/6bc72758-3b81-48bd-84d4-133136e9cad3/image.png",
      text: "런닝을 한 후에 기록된 데이터를 통하여 타인과 경쟁도 할 수 있고 운동량도 알 수 있다. 그리고 다이어트 관련 기능으로 칼로리 사전과 이 주의 음식과 운동관련 데이터 통계가 있다.",
    },
    {
      title: "Introduce how much you are needed",
      name: "My info",
      img: "https://velog.velcdn.com/images/hugh0223/post/6b329f7f-1869-4840-82fc-3ad2756e04af/image.png",
      text: "",
    },
    {
      title: "Someone ate a hotdog one day..",
      name: "If i am dog..",
      img: "https://user-images.githubusercontent.com/75062526/218747794-a7a61c77-d04b-4e50-be83-bbaa0e22b589.jpg",
      text: "성향테스트입니다! 11문제를 나의 마음에 드는 답변을 고른다. 결과를 취합하여 6 종류의 개중 한마리가 결과로 나온다. 또한 각 결과를 저장한 6마리의 결과 비율도 나온다.",
    },

    {
      title: "Introduce how much you are needed",
      name: "My info",
      img: "https://cdn.mygoyang.com/news/photo/202102/62807_75690_22.jpg",
      text: "",
    },
    {
      title: "Someone ate a hotdog one day..",
      name: "If i am dog..",
      img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/146T/image/bylfRiG_5g7spyDzYhfwZ4jjAp0.jpg",
      text: "성향테스트입니다! 11문제를 나의 마음에 드는 답변을 고른다. 결과를 취합하여 6 종류의 개중 한마리가 결과로 나온다. 또한 각 결과를 저장한 6마리의 결과 비율도 나온다.",
    },
  ];

  const [isNext, setIsNext] = useState(false);
  const [current, setCurrent] = useState(0);
  const [order, setOrder] = useState([1, 2, 3]);
  const [modalOpen, setModalOpen] = useState(false); //modal창 노출 여부 결정
  const showModal = () => {
    setModalOpen(true); //클릭일때만 오픈
  };

  const onBack = () => {
    if (order[0] > 0) {
      setIsNext(false);
      setCurrent((current) => current - 1);
    }
  };
  const onNext = () => {
    if (order[2] < pptList.length - 1) {
      setIsNext(true);
      setCurrent((current) => current + 1);
    }
  };

  useEffect(() => {
    let reOrder = [];
    order.forEach((item) => {
      let itemValue = item;
      if (isNext) {
        itemValue += 1;
      } else {
        itemValue -= 1;
      }
      reOrder.push(itemValue);
    });
    setOrder(reOrder);
  }, [current]);

  return (
    <div id="2" className={styles.portfolio}>
      <h1 className={styles.portfolio_label}>Port-Folio</h1>
      <div class="support-grid"></div>

      <div className={styles.band}>
        <div className={styles.item_1}>
          <a className={styles.card}>
            <div
              className={styles.card_thumb}
              style={{
                backgroundImage: `url(${pptList[order[0]].img})`,
              }}
            ></div>
            <article className={styles.card_article}>
              <h1 className={styles.card_title}>
                {pptList[order[0]].title}
                <br /> <strong>{pptList[order[0]].name}</strong>
              </h1>
              <br /> <br />
              <p className={styles.card_text}>{pptList[order[0]].text}</p>
              <div>
                <Btn onClick={showModal}>Detail</Btn>
                {modalOpen && (
                  <FeedModal setModalOpen={setModalOpen} imgs={modalImgs} />
                )}
                <span className={styles.card_cat}>
                  App (Android & FireBase)
                </span>
              </div>{" "}
            </article>
          </a>
        </div>
        <div class="item-2">
          <a className={styles.card}>
            <div
              className={styles.card_thumb}
              style={{
                backgroundImage: `url(${pptList[order[1]].img})`,
              }}
            ></div>
            <article className={styles.card_article}>
              <h1 className={styles.card_title}>
                {pptList[order[1]].title}
                <br /> <strong>{pptList[order[1]].name}</strong>
              </h1>{" "}
              <br /> <br />
              <p className={styles.card_text}>{pptList[order[1]].text}</p>
              <div>
                <Btn onClick={showModal}>Detail</Btn>
                {modalOpen && (
                  <FeedModal setModalOpen={setModalOpen} imgs={modalImgs} />
                )}
                <span className={styles.card_cat}>Web (React & Django)</span>
              </div>
            </article>
          </a>
        </div>

        <div class="item-3">
          <a className={styles.card}>
            <div
              className={styles.card_thumb}
              style={{
                backgroundImage: `url(${pptList[order[2]].img})`,
              }}
            ></div>
            <article className={styles.card_article}>
              <h1 className={styles.card_title}>
                {pptList[order[2]].title}
                <br /> <strong>{pptList[order[2]].name}</strong>
              </h1>
              <br /> <br />
              <p className={styles.card_text}>{pptList[order[2]].text}</p>
              <div>
                <Btn onClick={showModal}>Detail</Btn>
                {modalOpen && (
                  <FeedModal setModalOpen={setModalOpen} imgs={modalImgs} />
                )}
                <span className={styles.card_cat}>WEB (REACT & FIREBASE)</span>
              </div>
            </article>
          </a>
        </div>
      </div>
      <SliderBtn
        class="back-btn"
        style={{ left: "10px", color: "rgb(56 56 56)" }}
        onClick={onBack}
      >
        <FontAwesomeIcon size="2x" icon={Solid.faLessThan} />
      </SliderBtn>
      <SliderBtn
        class="next-btn"
        style={{ right: "10px", color: "rgb(56 56 56)" }}
        onClick={onNext}
      >
        <FontAwesomeIcon size="2x" icon={Solid.faGreaterThan} />
      </SliderBtn>
    </div>
  );
}

export default PortFolio;
