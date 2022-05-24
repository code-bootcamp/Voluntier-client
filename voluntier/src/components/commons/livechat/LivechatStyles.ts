import styled from "@emotion/styled";

export const TalkWrapper = styled.form`
  width: 320px;
  height: 580px;
  display: flex;
  flex-direction: column;
`;

export const TalkHeader = styled.div`
  width: 100%;
  height: 50px;
  background-image: url("../../../../images/boardDetail/chatheader.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const TalkContents = styled.div`
  width: 100%;
  height: 450px;
  background-color: #ededed;
`;

export const TalkWrite = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 0px 0px 20px 20px;
  border: 2.2px solid #0085cb;
  border-top: 2.2px solid #0085cb;
  ::placeholder {
    font-size: 11px;
  }
`;
