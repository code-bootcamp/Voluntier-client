import { gql, useMutation } from "@apollo/client";
import * as S from "./VolunteerListStyles";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { FETCH_ENROLL } from "../../units/Board/boardDetail/BoardDetailQueries";
import { IQuery } from "../../../commons/types/generated/types";
import { MouseEvent } from "react";

export const UPDATE_ENROLL = gql`
  mutation updateEnroll($boardId: String!, $enrollId: String!) {
    updateEnroll(boardId: $boardId, enrollId: $enrollId) {
      status
    }
  }
`;

export const DELETE_ENROLL = gql`
  mutation deleteEnroll($boardId: String!, $enrollId: String!) {
    deleteEnroll(boardId: $boardId, enrollId: $enrollId)
  }
`;

interface IPropsVolunteerList {
  enrollData? : Pick<IQuery,"fetchEnrollsByBoardId">
  data? : Pick<IQuery,"fetchBoard">
  userData? : Pick<IQuery,"fetchLoginUser">
}

export default function VolunteerList(props:IPropsVolunteerList) {
  const router = useRouter();
  const [updateenroll] = useMutation(UPDATE_ENROLL);
  const [deleteenroll] = useMutation(DELETE_ENROLL);
  const onClickUpdateEnroll = async (event:MouseEvent<HTMLButtonElement>) => {
    try {
      await updateenroll({
        variables: {
          boardId: router.query.boardId,
          enrollId: (event.target as HTMLButtonElement).id,
        },
        refetchQueries: [
          {
            query: FETCH_ENROLL,
            variables: { boardI: String(router.query.boardId) },
          },
        ],
      });

    } catch (error) {
     if(error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDeleteEnroll = (event:MouseEvent<HTMLImageElement>) => {
    try {
      deleteenroll({
        variables: {
          boardId: String(router.query.boardId),
          enrollId: (event.target as HTMLImageElement).id,
        },
        refetchQueries: [
          {
            query: FETCH_ENROLL,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      Modal.success({ content: "봉사 삭제처리 성공!" });
    } catch (error) {
      if(error instanceof Error) Modal.error({ content: error.message });
    }
  };


  return (
    <S.Wrapper>
      <S.Row>
        <S.Title>신청자 명단</S.Title>
      </S.Row>
      <S.ListWrapper>
          {props.enrollData?.fetchEnrollsByBoardId.map((el: any) => (
            <S.Row key={el.id}>
              <S.Column style={{ width: "30%" }}>{el.user.name}</S.Column>
              <S.Column style={{ width: "50%" }}>
              {props.data?.fetchBoard.user.id ===
              props.userData?.fetchLoginUser.id ? (
                <>{el.user.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}</> ) : (
                  <>{el.user.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3')}</>
                )}
              </S.Column>
              <S.Column style={{ width: "30%", color: "#FF3800" }}>
                {el.status === "COMPLETE" ? "봉사완료" : "신청중"}
              </S.Column>
              {props.data?.fetchBoard.user.id ===
              props.userData?.fetchLoginUser.id ? (
                <>
                  {el.status === "COMPLETE" ? (
                    <></>
                  ) : (
                    <>
                      <S.Column style={{ width: "5%", marginLeft: "5%" }}>
                        <S.DeleteIcon
                          id={el.id}
                          onClick={onClickDeleteEnroll}
                          src="/images/boardWrite/delete.png"
                        />
                      </S.Column>
                      <S.Column style={{ width: "30%" }}>
                        <S.CompleteButton
                          id={el.id}
                          onClick={onClickUpdateEnroll}
                        >
                          완료처리하기
                        </S.CompleteButton>
                      </S.Column>
                    </>
                  )}
                </>
              ) : (
                <></>
              )}
            </S.Row>
          ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
