import styled from "styled-components";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";

const FeedContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 10px 20px;

  width: 550px;
  max-height: 700px;

  margin: 0 auto;

  background-color: white;

  color: black;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 3px;
  &:hover {
    color: black;
  }
`;
const FeedWrapper = styled.div`
  position: relative;
`;
const FeedHeader = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  max-height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px 18px;
  justify-content: space-between;
  & > svg {
    cursor: pointer;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FeedHeaderRightBox = styled(Box)`
  & > div {
    cursor: pointer;
  }
  & > p {
    cursor: pointer;
  }
`;
const ProfileImg = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 35px;
  height: 35px;
  background-size: cover;
  background-position: center;
`;
const ProfileNick = styled.p`
  margin-left: 14px;
  margin: 0 auto;
  margin-left: 15px;
  transform: translateY(-5%);
  font-weight: bold;
`;
const Time = styled.span`
  font-size: 10px;
  margin-left: 15px;
  transform: translateY(-10%);
`;
const Comments = styled.p`
  width: 100%;
  padding: 18px;
  padding-top: 23px;
  padding-bottom: 5px;
  font-size: 12px;
  margin-bottom: 0px;
  text-align: start;
`;

const ImgSlider = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 5px;
`;

const ImgBox = styled.div`
  position: absolute;
  top: 0px;
  left: -233px;
  width: 500px;
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 400px;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.1);
  transition: all 500ms ease-in-out;
  padding-right: 6px;
  &.active {
    opacity: 1;
    transform: scale(1);
  }
`;

const SliderBtn = styled.div`
  position: absolute;
  top: 0px;
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 25px;
  background: rgba(0, 0, 0, 0.2);
  transition: all 300ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ThumbnailBox = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 40px;
  cursor: pointer;
  border: 2px solid transparent;
  &.active {
    border: 2px solid #fff;
  }
`;

function FeedModal({ setModalOpen, imgs }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesActive, setImagesActive] = useState(
    new Array(imgs.length).fill("btn")
  );

  useEffect(() => {
    imagesActive[0] = "btn active";
    setImagesActive(imagesActive);
  }, []);

  const onThumbnailClick = (e) => {
    console.log(e.currentTarget);

    setCurrentImage(e.currentTarget.getAttribute("values"));
    console.log(currentImage);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <FeedContainer>
      <FeedWrapper>
        <FeedHeader>
          <FontAwesomeIcon
            size="2x"
            icon={Solid.faArrowLeft}
            onClick={closeModal}
          />
          <FeedHeaderRightBox>
            <FontAwesomeIcon
              style={{
                color: true ? "tomato" : "inherit",
                marginRight: "25px",
              }}
              size="2x"
              icon={faHeart}
            />
            <ProfileImg
              style={{
                backgroundImage:
                  "url(https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg)",
              }}
            />
            <ProfileNick>HyeonSu</ProfileNick>
            <Time>5 분전</Time>
          </FeedHeaderRightBox>
        </FeedHeader>
        {/* <FeedPhoto
        style={{
          backgroundImage:
            "url(https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg)",
        }}
      /> */}

        <ImgSlider>
          <ImgBox>
            {imgs.map((item, idx) => {
              return (
                <Img
                  key={idx}
                  values={idx}
                  src={item}
                  className={currentImage == idx ? "active" : ""}
                />
              );
            })}
          </ImgBox>
          <ThumbnailBox>
            {imgs.map((item, idx) => {
              return (
                <Thumbnail
                  key={idx}
                  values={idx}
                  src={item}
                  onClick={onThumbnailClick}
                  className={currentImage == idx ? "active" : ""}
                />
              );
            })}
          </ThumbnailBox>
          <SliderBtn
            class="back-btn"
            onClick={() => {
              setCurrentImage((current) => {
                current--;
                if (current < 0) {
                  current = imgs.length - 1;
                }
                return current;
              });
            }}
            style={{ left: "16px" }}
          >
            <FontAwesomeIcon size="2x" icon={Solid.faLessThan} />
          </SliderBtn>
          <SliderBtn
            class="next-btn"
            onClick={() => {
              setCurrentImage((current) => {
                current++;
                if (current == imgs.length) {
                  current = 0;
                }
                return current;
              });
            }}
            style={{ right: "16px" }}
          >
            <FontAwesomeIcon size="2x" icon={Solid.faGreaterThan} />
          </SliderBtn>
        </ImgSlider>
        <Comments>
          <b
            style={{
              fontWeight: "800",
              paddingRight: "5px",
            }}
          >
            HyeonSu{" "}
          </b>
          이재용 삼성전자 회장이 수사받을 당시 변호인들이 한겨레신문을 상대로
          제기한 정정보도 청구 소송에서 다시 한번 패소했다. 서울중앙지법
          민사8-2부(김봉원 강성훈 권순민 부장판사)는 16일 이 회장의 전 변호인인
          최재경, 이동열 변호사가 한겨레신문을 상대로 낸 정정보도 청구 소송에서
          1심과 같이 원고 패소로 판결했다. 한겨레신문은 2020년 9월 16일 검찰
          관계자를 인용해 "이 변호사가 이 부회장의 구속영장이 청구되기 전 수사
          검사에게 연락해 '삼성생명 관련 부분은 예민하니 빼 달라. 최 변호사
          요청이다'라고 말했다"고 보도했다.
        </Comments>
      </FeedWrapper>
    </FeedContainer>
  );
}

export default FeedModal;
