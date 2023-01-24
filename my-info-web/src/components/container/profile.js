import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import styled from "styled-components";
import times from "lodash/times";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import icons from "./icons.js";
import styles from "./profile.module.css";

import FullWidth from "./FullWidth";

const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;

const Company = styled.div`
  position: relative;
  width: ${(props) => props.scale * 75}px;
  height: ${(props) => props.scale * 75}px;
`;

const Circle = styled.div`
  position: absolute;
  transform: scale(0.5);
  object-position: center center;
  will-change: transform, opacity;
  width: ${(props) => props.scale * 150}px;
  height: ${(props) => props.scale * 150}px;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00ed64;
`;

const Logo = styled.img`
  display: block;
  /* https://stackoverflow.com/questions/24843676/how-can-i-fit-a-square-html-image-inside-a-circle-border */
  /* just making it < 70.7% */
  width: auto;
  height: 100%;
`;

const Companies = ({ size, onStartPerformance, onEndPerformance }) => {
  const [key, setKey] = useState(nanoid());
  // const [hello, setHello] = useState("안녕");

  useEffect(() => {
    setKey(nanoid());
    window.scrollTo(0, 0);
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  // const scrollRef = useRef();

  // const hi_list = [
  //   "안녕",
  //   "Hello",
  //   "こんにちは",
  //   "你好",
  //   "hallo",
  //   "Hola",
  //   "Привет",
  //   "สวัสดี",
  //   "olá",
  //   "salut",
  //   "Сайн уу",
  //   "ciao",
  //   "xin chào",
  // ];

  // const [index, setIndex] = useState(1);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(index);

  //     setHello(hi_list[index]);
  //     if (index < 12) {
  //       setIndex(index + 1);
  //       console.log(" if " + index);
  //     } else {
  //       setIndex(0);
  //       console.log(" else " + index);
  //     }
  //   }, 3000);
  // }, []);

  // ** 인풋에 변화(onChange)가 일어났을 때 위 setInterval처럼 clearInterval을 하고 새로운
  // 변화 값(delay)를 넣어주지 않아도 알아서 인터벌을 새로 설정하는 것을 볼 수 있다

  return (
    <>
      <FullWidth className={styles.marquee_box}>
        <Height height={850}>
          <Marquee
            key={key}
            velocity={12}
            minScale={0.7}
            resetAfterTries={200}
            scatterRandomly
            onInit={onStartPerformance}
            onFinish={onEndPerformance}
          >
            {times(10, Number).map((id) => (
              <Motion
                key={`marquee-example-company-${id}`}
                initDeg={randomIntFromInterval(0, 360)}
                direction={
                  Math.random() > 0.5 ? "clockwise" : "counterclockwise"
                }
                velocity={5}
                radius={scale * 100}
              >
                <Company scale={scale * 1.5}>
                  <Logo src={icons[id]} alt="" />
                </Company>
              </Motion>
            ))}
          </Marquee>
        </Height>
        <p
          className={styles.info}
          stlye="background-image:url(../../image/background.png)"
        >
          Hi , My name is KHS.
          <br />
          <br />
          <p className={styles.info_more}>
            I'am Back-End Developer.
            <br />
            My Goal is Full-stack Developer.
            <br />
            Of course, I still know how to do front.
          </p>
        </p>
        <div className={styles.baro}>
          <Link to="1" spy={true} smooth={true}>
            <div className={styles.baro_img}></div>
          </Link>
          <p className={styles.baro_text}>
            You can't wait to see my works, Click here!!
          </p>
        </div>
        <p className={styles.view_description}>
          The things flying on the screen are skills I know how to do.
        </p>
      </FullWidth>
    </>
  );
};

export default React.memo(withSize()(Companies));
