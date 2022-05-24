import * as S from "./LivechatStyles";
import { v4 as uuidv4 } from "uuid";

export default function LivechatUI(props) {
  return (
    <S.TalkWrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.TalkHeader />
      <S.TalkContents>
        {props.data?.map((el) => (
          <div key={uuidv4()}>
            {el.user.id === props.userId ? (
              <S.Right>
                <S.Text>{el.message}</S.Text>
              </S.Right>
            ) : (
              <S.Left>
                <S.Text>{`${el.user.name}: ${el.message}`}</S.Text>
              </S.Left>
            )}
          </div>
        ))}
        {props.resultMsg.map((el) => (
          <div key={uuidv4()}>
            {el[2] === props.userId ? (
              <S.Right>
                <S.Text>{el[1]}</S.Text>
              </S.Right>
            ) : (
              <S.Left>
                <S.Text>{`${el[0]}: ${el[1]}`}</S.Text>
              </S.Left>
            )}
          </div>
        ))}
      </S.TalkContents>
      {props.accessToken && (
        <S.TalkWrite
          placeholder="   궁금한 점을 물어보세요! 실시간으로 답변해드립니다!"
          onKeyDown={props.onKeyDown}
          type="text"
          {...props.register("contents", { required: true })}
        />
      )}
      {!props.accessToken && (
        <S.TalkWrite
          placeholder="   로그인 후 채팅이 가능합니다!"
          disabled={true}
        />
      )}
    </S.TalkWrapper>
  );
}
