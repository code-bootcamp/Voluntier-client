import * as S from "./LivechatStyles";
import { v4 as uuidv4 } from "uuid";

export default function LivechatUI(props) {
  return (
    <S.TalkWrapper>
      <S.TalkHeader />
      <S.TalkContents>
        <div>{props.come}</div>
        {props.resMsg.map((el) => (
          <div key={uuidv4()}>
            {el[0] === props.nickname ? (
              <div>
                <div>{el}</div>
              </div>
            ) : (
              <div>
                <div>{el}</div>
              </div>
            )}
          </div>
        ))}
      </S.TalkContents>

      <S.TalkWrite
        onChange={props.onChangeContents}
        placeholder="   궁금한 점을 물어보세요! 실시간으로 답변해드립니다!"
        onKeyDown={props.onKeydown}
      />
    </S.TalkWrapper>
  );
}
