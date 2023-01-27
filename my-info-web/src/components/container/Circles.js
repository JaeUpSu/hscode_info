import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";

const Circles = () => {
  return (
    <div style={{ height: "100px" }}>
      <Marquee
        velocity={12}
        minScale={0.7}
        resetAfterTries={200}
        scatterRandomly
      >
        {times(10, Number).map((id) => (
          <Motion
            key={`child-${id}`}
            initDeg={randomIntFromInterval(0, 360)}
            direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
            velocity={10}
            radius={50}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "yellow",
                textAlign: "center",
                lineHeight: "25px",
                zIndex: "-1",
              }}
            ></div>
          </Motion>
        ))}
      </Marquee>
    </div>
  );
};

export default Circles;
