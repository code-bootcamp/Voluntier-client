import * as S from "./LivechatStyles";
import { v4 as uuidv4 } from "uuid";

export default function LivechatUI(props) {
  return (
    <S.TalkWrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.TalkHeader />
      <S.TalkContents>
        {props.resultMsg.map((el) => (
          <div key={uuidv4()}>
            <div>{el}</div>
          </div>
        ))}
      </S.TalkContents>

      <S.TalkWrite
        placeholder="   궁금한 점을 물어보세요! 실시간으로 답변해드립니다!"
        onKeyDown={props.onKeyDown}
        type="text"
        {...props.register("contents")}
      />
      {/* <button>제출</button> */}
    </S.TalkWrapper>
  );
}
