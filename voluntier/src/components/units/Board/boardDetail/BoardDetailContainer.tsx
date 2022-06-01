import BoardDetailUI from "./BoardDetailPresenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_ENROLL,
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_ENROLL,
} from "./BoardDetailQueries";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../Mypage/MypageQueries";

export default function BoardDetail() {
  const [isEdit, setIsEdit] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const router = useRouter();
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);
  const [createenroll] = useMutation(CREATE_ENROLL);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  const { data: enrollData, refetch } = useQuery<
    Pick<IQuery, "fetchEnrollsByBoardId">
  >(FETCH_ENROLL, {
    variables: { boardId: String(router.query.boardId) },
  });

  const CreateEnroll = async () => {
    try {
      await createenroll({
        variables: {
          boardId: router.query.boardId,
        },
      });
      Modal.success({
        content: "신청이 완료되었습니다! 마이페이지에서 확인하세요!",
      });
      refetch();
    } catch (error) {
      Modal.error({
        content: "이미 신청이 완료되었거나, 지금은 신청할 수 없습니다.",
      });
    }
  };

  const DeleteBoard = () => {
    try {
      deleteBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
      });
      Modal.success({ content: "삭제완료! 목록페이지로 넘어갑니다." });
      router.push("/boards");
    } catch (error) {
      Modal.error({
        content: "글을 삭제할 수 없습니다!",
      });
    }
  };

  const onClickEdit = () => {
    setIsEdit(true);
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickChat = () => {
    setIsChat((prev) => !prev);
  };

  return (
    <BoardDetailUI
      data={data}
      userData={userData}
      enrollData={enrollData}
      CreateEnroll={CreateEnroll}
      DeleteBoard={DeleteBoard}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      isChat={isChat}
      onClickChat={onClickChat}
      refetch={refetch}
    />
  );
}
