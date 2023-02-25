import styles from "./portfolio.module.css";
import styled from "styled-components";

import FeedModal from "../modal/feed_modal";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 180px;
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
  top: 54.5%;
  transform: translateY(-50%);
  width: 40px;
  height: 730px;
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

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
`;
const Title = styled.strong`
  margin-top: 10px;
  font-size: 30px;
`;

function PortFolio() {
  const [isNext, setIsNext] = useState(false);
  const [current, setCurrent] = useState(0);
  const [order, setOrder] = useState([1, 2, 3]);
  const [feeds, setFeeds] = useState([]);
  const [modalIdx, setModalIdx] = useState(0); //modal창 노출 여부 결정
  const [modalOpen, setModalOpen] = useState(false); //modal창 노출 여부 결정

  const showModal = (e) => {
    const idx = Number(e.currentTarget.getAttribute("value"));
    console.log(idx);
    console.log(feeds[order[0]].ppts);
    console.log(feeds[order[1]].ppts);
    console.log(feeds[order[2]].ppts);
    setModalIdx(order[idx]);
    setModalOpen(true); //클릭일때만 오픈
  };

  const onBack = () => {
    if (order[0] > 0) {
      setIsNext(false);
      setCurrent((current) => current - 1);
    }
  };
  const onNext = () => {
    if (order[2] < feeds.length - 1) {
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

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/feeds/")
      .then((response) => {
        setFeeds([...response.data]);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                backgroundImage: `url(${feeds[order[0]]?.img})`,
              }}
            ></div>
            <article className={styles.card_article}>
              <div>
                <TitleBox>
                  <h1 className={styles.card_title}>
                    {feeds[order[0]]?.subtitle}
                  </h1>{" "}
                  <br /> <Title>{feeds[order[0]]?.title}</Title>
                </TitleBox>
                <br /> <br />
                <p className={styles.card_text}>{feeds[order[0]]?.contents}</p>
              </div>
              <div>
                <Btn onClick={showModal} value={0}>
                  Detail
                </Btn>
                {modalOpen && modalIdx == order[0] && (
                  <FeedModal
                    setModalOpen={setModalOpen}
                    ppts={feeds[modalIdx]?.ppts}
                  />
                )}
                <span className={styles.card_cat}>{feeds[order[0]]?.info}</span>
              </div>{" "}
            </article>
          </a>
        </div>
        <div class="item-2">
          <a className={styles.card}>
            <div
              className={styles.card_thumb}
              style={{
                backgroundImage: `url(${feeds[order[1]]?.img})`,
              }}
            ></div>
            <article className={styles.card_article}>
              <TitleBox>
                <h1 className={styles.card_title}>
                  {feeds[order[1]]?.subtitle}
                </h1>{" "}
                <br /> <Title>{feeds[order[1]]?.title}</Title>
              </TitleBox>
              <br /> <br />
              <p className={styles.card_text}>{feeds[order[1]]?.contents}</p>
              <div>
                <Btn onClick={showModal} value={1}>
                  Detail
                </Btn>
                {modalOpen && modalIdx == order[1] && (
                  <FeedModal
                    setModalOpen={setModalOpen}
                    ppts={feeds[modalIdx]?.ppts}
                  />
                )}
                <span className={styles.card_cat}>{feeds[order[1]]?.info}</span>
              </div>
            </article>
          </a>
        </div>

        <div class="item-3">
          <a className={styles.card}>
            <div
              className={styles.card_thumb}
              style={{
                backgroundImage: `url(${feeds[order[2]]?.img})`,
              }}
            ></div>
            <article className={styles.card_article}>
              <TitleBox>
                <h1 className={styles.card_title}>
                  {feeds[order[2]]?.subtitle}
                </h1>
                <br /> <Title>{feeds[order[2]]?.title}</Title>
              </TitleBox>
              <br /> <br />
              <p className={styles.card_text}>{feeds[order[2]]?.contents}</p>
              <div>
                <Btn onClick={showModal} value={2}>
                  Detail
                </Btn>
                {modalOpen && modalIdx == order[2] && (
                  <FeedModal
                    setModalOpen={setModalOpen}
                    ppts={feeds[setModalIdx]?.ppts}
                  />
                )}
                <span className={styles.card_cat}>{feeds[order[2]]?.info}</span>
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
