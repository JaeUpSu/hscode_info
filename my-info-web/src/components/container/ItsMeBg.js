import React, { useState, useEffect, useRef } from "react";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import styled from "styled-components";
import times from "lodash/times";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import tech_icons from "../tech_icons";
import styles from "./itsme.module.css";

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
    // window.scrollTo(0, 0);
  }, [size, size.width]);

  let scale = 0.3;

  if (size && size.width > 800) {
    scale = 0.5;
  }

  if (size && size.width > 1100) {
    scale = 0.65;
  }

  if (size && size.width > 1400) {
    scale = 0.8;
  }

  return (
    <>
      <FullWidth className={styles.marquee_box}>
        <Height height={450}>
          <Marquee
            key={key}
            velocity={12}
            minScale={0.7}
            resetAfterTries={200}
            scatterRandomly
            onInit={onStartPerformance}
            onFinish={onEndPerformance}
          >
            {times(14, Number).map((id) => (
              <Motion
                key={`marquee-example-company-${id}`}
                initDeg={randomIntFromInterval(0, 360)}
                direction={
                  Math.random() > 0.5 ? "clockwise" : "counterclockwise"
                }
                velocity={5}
                radius={scale * 100}
              >
                <Company scale={scale * 1.3}>
                  <Logo src={tech_icons[id]} alt="" />
                </Company>
              </Motion>
            ))}
          </Marquee>
        </Height>
      </FullWidth>
    </>
  );
};

export default React.memo(withSize()(Companies));
