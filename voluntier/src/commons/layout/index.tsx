import { ReactNode } from "react";
import styled from "@emotion/styled";
import Navigation from "./navigation/NavigationContainer";
import { breakPoints } from '../styles/Media';
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media ${breakPoints.mobile}{
    display: flex;
    flex-direction: column;
  }
`

const Body = styled.div`
  width: 100%;
`;

interface LayOutPageProps {
  children: ReactNode;
}

const HIDDEN = ["/login" , "/signup", "/"];

export default function LayOut(props: LayOutPageProps) {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);


  return (
    <Wrapper>
    {!isHidden&& 
      <Navigation/>
    }
      <Body>{props.children}</Body>
    </Wrapper>
  )
}