import styled from "styled-components";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeedContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 999;
  top: calc(50vh - 25%);
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 10px 10px 20px;

  width: 600px;
  max-height: 830px;

  margin: 0 auto;

  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 3px;
`;
const FeedHeader = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  max-height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  padding-right: 20px;
  & > svg {
    cursor: pointer;
  }
`;
const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FeedHeaderLeftBox = styled(LeftBox)`
  & > div {
    cursor: pointer;
  }
  & > p {
    cursor: pointer;
  }
`;
const FeedActionsLeftBox = styled(LeftBox)`
  & > svg {
    margin-left: 20px;
    cursor: pointer;
  }
`;
const ProfileImg = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 35px;
  height: 35px;
  background-image: url(https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg);
  background-size: cover;
  background-position: center;
`;
const ProfileNick = styled.p`
  margin-left: 14px;
  transform: translateY(-15%);
  font-weight: bold;
`;
const Time = styled.span`
  font-size: 10px;
  margin-left: 15px;
  transform: translateY(-10%);
`;
const FeedPhoto = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(https://cdn.eyesmag.com/content/uploads/sliderImages/2021/07/19/005-d020cb23-f09f-4f55-bfca-b2540f194ea2.jpg);
  background-position: center;
  background-size: cover;
`;

const FeedActions = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  & > svg {
    cursor: pointer;
  }
`;

const Likes = styled.div`
  width: 100%;
  padding: 0 20px;
  font-weight: bold;
  font-size: 12px;
`;
const Comments = styled.p`
  width: 100%;
  padding: 0 20px;
  padding-top: 5px;
  font-size: 12px;
`;
const Replys = styled.div`
  font-size: 13px;
  color: #666666;
  width: 100%;
  padding: 5px 20px;
  padding-bottom: 15px;
`;

const ReplysLine = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    width: 100%;
    height: 1px;
    background-color: lightgray;
    margin: 10px 0;
  }
`;

const ReplysInputBox = styled.div`
  display: flex;
  align-items: center;
`;

const ReplysInputProfile = styled(ProfileImg)`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;
const ReplysEnterBtn = styled.button`
  background: transparent;
  border: 0px;
  width: 50px;
  color: #2493ff;
  cursor: pointer;
`;

function FeedModal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <FeedContainer>
      <button
        className="close"
        style={{
          position: "absolute",
          right: 10,
          top: 10,
          color: "red",
          border: "none",
          cursor: "pointer",
        }}
        onClick={closeModal}
      >
        X
      </button>
      <FeedHeader>
        <FeedHeaderLeftBox>
          <ProfileImg />
          <ProfileNick>HyeonSu</ProfileNick>
          <Time>5 분전</Time>
        </FeedHeaderLeftBox>
        <FontAwesomeIcon size="2x" icon={Solid.faEllipsis} />
      </FeedHeader>
      <FeedPhoto />
      <FeedActions>
        <FeedActionsLeftBox>
          <FontAwesomeIcon
            style={{
              color: true ? "tomato" : "inherit",
            }}
            size="2x"
            icon={faHeart}
          />
          <FontAwesomeIcon size="2x" icon={faComment} />
          <FontAwesomeIcon size="2x" icon={faPaperPlane} />
        </FeedActionsLeftBox>
        <FontAwesomeIcon size="2x" icon={faBookmark} />
      </FeedActions>
      <Likes>좋아요 1250개</Likes>
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
      <Replys>
        댓글 95개 모두 보기{" "}
        <ReplysLine>
          <div />
        </ReplysLine>
        <ReplysInputBox>
          <ReplysInputProfile />
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="Write a comment ..."
          />
          <ReplysEnterBtn>게시</ReplysEnterBtn>
        </ReplysInputBox>
      </Replys>
    </FeedContainer>
  );
}

export default FeedModal;
