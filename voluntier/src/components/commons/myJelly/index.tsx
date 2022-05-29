import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";
// import { breakPoints } from "../../../commons/styles/Media";

const Myjelly1 = styled.img`
  width: 100%;
  height: 100%;
`;
const Myjelly2 = styled.img`
  width: 100%;
  height: 100%;
`;

const Myjelly3 = styled.img`
  width: 100%;
  height: 100%;
`;

const Myjelly4 = styled.img`
  width: 100%;
  height: 100%;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MiniJelly1 = () => {
  return <Myjelly1 src="/images/mypage/jelly1.png" />;
};

export const MiniJelly2 = () => {
  return <Myjelly2 src="/images/mypage/jelly2.png" />;
};

export const MiniJelly3 = () => {
  return <Myjelly3 src="/images/mypage/jelly3.png" />;
};

export const MiniJelly4 = () => {
  return <Myjelly4 src="/images/mypage/jelly4.png" />;
};
