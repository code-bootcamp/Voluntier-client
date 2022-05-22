import { ReactNode, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Navigation from "./navigation/NavigationContainer";
import { breakPoints } from "../styles/Media";
import { useRouter } from "next/router";
import Footer from "./footer/FooterContainer";

const OuterWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  /* height: 110vh; */
  height: 100%;
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const Body = styled.div`
  width: 100%;
`;

const MobileWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface LayOutPageProps {
  children: ReactNode;
}

const HIDDEN = ["/login", "/signup", "/"];

export default function LayOut(props: LayOutPageProps) {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);

  const [windowSize, setWindowSize] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <div>
      {/* 웹, 태블릿 */}
      {!windowSize && (
        <OuterWrapper>
          <Wrapper>
            {!isHidden && <Navigation />}
            <Body>{props.children}</Body>
          </Wrapper>
          <Footer />
        </OuterWrapper>
      )}

      {/* 모바일 */}
      {windowSize && (
        <Wrapper>
          <MobileWrapper>
            <Body>{props.children}</Body>
            {!isHidden && <Navigation />}
          </MobileWrapper>
        </Wrapper>
      )}
    </div>
  );
}
