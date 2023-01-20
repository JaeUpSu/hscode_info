// function Profile() {
//   // return (
//   //   <div className={styles.profile_box}>
//   //     <img
//   //       className={styles.profile_img}
//   //       src="//w.namu.la/s/c9b951140de72f66425f2f5523cd2a4aa0a796a5c67e4c8363782e249d58f9d4fbbd977b1c6fd8d0fcecf5ee70a146619ee15c502a074c547f931384a97d69e5d47069d61f108598b469b0374b6480ca970c720be5cdcc4ab0d6c5e2dcbbc1f3"
//   //     />
//   //     <div className={styles.profile_text_box}>
//   //       <p className={styles.profile_text}>
//   //         Hello, My name is KHS.
//   //         <br />
//   //         I'am Back-End Developer.
//   //         <br />
//   //         <br />
//   //         My Goal is Full-stack Developer.
//   //         <br />
//   //         Of course, I still know how to play front.
//   //       </p>

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";
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

  useEffect(() => {
    setKey(nanoid());
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

  return (
    <FullWidth>
      <Height height={500}>
        <Marquee
          key={key}
          velocity={12}
          scatterRandomly
          minScale={0.7}
          resetAfterTries={200}
          onInit={onStartPerformance}
          onFinish={onEndPerformance}
        >
          {times(10, Number).map((id) => (
            <Motion
              key={`marquee-example-company-${id}`}
              initDeg={randomIntFromInterval(0, 360)}
              direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
              velocity={5}
              radius={scale * 100}
            >
              <Company scale={scale * 1.3}>
                <Logo src={icons[id]} alt="" />
              </Company>
            </Motion>
          ))}
        </Marquee>
        <p
          className={styles.info}
          stlye="background-image:url(../../image/background.png)"
        >
          Hello, My name is KHS.
          <br />
          I'am Back-End Developer.
          <br />
          My Goal is Full-stack Developer.
          <br />
          Of course, I still know how to play front.
        </p>
      </Height>
    </FullWidth>
  );
};

export default React.memo(withSize()(Companies));
