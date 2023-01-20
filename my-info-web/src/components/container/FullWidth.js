import styled from "styled-components";
import background_img from "../../image/background.png";

// ty Chris https://css-tricks.com/full-width-containers-limited-width-parents/
const FullWidth = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-image: url(${background_img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default FullWidth;
