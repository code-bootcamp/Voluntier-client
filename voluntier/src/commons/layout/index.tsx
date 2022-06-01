import { ReactNode, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Navigation from "./navigation/NavigationContainer";
import { breakPoints } from "../styles/Media";
import { useRouter } from "next/router";
import Footer from "./footer/FooterContainer";
import io, { Socket } from "socket.io-client";
import { useToasts } from "react-toast-notifications";
import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "../../components/units/Mypage/MypageQueries";

const OuterWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const Body = styled.main`
  width: 100vw;
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

const HIDDEN = ["/login", "/signup", "/", "/login/findpassword"];
const url = "backendapi.voluntier.site/chat";
const socket: Socket = io(url, { transports: ["websocket"] });

export default function LayOut(props: LayOutPageProps) {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  const [windowSize, setWindowSize] = useState(false);
  const { data: Userdata } = useQuery(FETCH_LOGIN_USER);
  const [userId, setUserId] = useState("");
  const { addToast } = useToasts();

  const disconnect = () => {
    socket.off();
  };


  useEffect(() => {
    setUserId(Userdata?.fetchLoginUser?.id);
    router.events.on("routeChangeComplete", disconnect);
    return () => {
      router.events.off("routeChangeComplete", disconnect);
    };
  }, [Userdata, router]);

      
    useEffect(() => {
        socket.on(userId, (data) => {
        return addToast(`${data[0]}님에게 채팅 왔어요! ${data[1]} `,{appearance:"info"})
      })
      }, [userId]);


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
