import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@toast-ui/react-editor";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWriteQueries";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRecoilState } from "recoil";
import useAuth from "../../../commons/hooks/useAuth";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IBoardSubmitFormValues, IBoardWrite, ImyupdateBoardInput, IMyVariables } from "./BoardWriteTypes";
import { FETCH_LOGIN_USER } from "../boardDetail/BoardDetailQueries";
import BoardWriteUI from "./BoardWritePresenter";
import { calendarDateState } from '../../../../commons/store/index';


const schema = yup.object({
  title: yup.string().required("봉사모집 제목을 작성해주세요 "),
  centerName: yup.string().required("봉사센터 이름을 작성해주세요 "),
  centerOwnerName: yup.string().required("봉사센터 대표이름을 작성해주세요 "),
  centerPhone: yup.string().required("봉사센터의 대표전화번호를 작성해주세요 "),
  serviceTime: yup
    .number()
    .typeError("숫자로 입력해주세요.")
    .required("봉사소요시간을 작성해주세요 "),
  address: yup.string().required("봉사센터주소를 작성해주세요 "),
  addressDetail: yup.string().required("봉사센터 상세주소를 작성해주세요 "),
});

const nonschema = yup.object({
  title: yup.string(),
  centerName: yup.string(),
  centerOwnerName: yup.string(),
  centerPhone: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
});


export default function BoardWrite(props:IBoardWrite) {
  useAuth();

  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [calendardate] = useRecoilState(calendarDateState);
  const [address, setAddress] = useState("");
  const editorRef = useRef<Editor>(null);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const {data: Userdata} = useQuery(FETCH_LOGIN_USER)
  const { register, handleSubmit, setValue, getValues } = useForm({
    resolver: yupResolver(props.isEdit ? nonschema : schema),
    mode: "onChange",
  });

  if(Userdata?.fetchLoginUser?.isAdmin){
    Modal.error({content:"관리자는 게시글 작성이 불가합니다.일반유저로 로그인해주세요", width: 320})
    router.push('/boards')
  }

  const handleComplete = (data:any) => {
    setIsModalVisible((prev) => !prev);
    setAddress(data.address);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  

  // 봉사 등록 함수

  const onClickSubmit = async (data: IBoardSubmitFormValues) => {
    const contentsvalue = editorRef.current?.getInstance().getMarkdown();
    data.recruitCount = 10;
    data.contents = contentsvalue;
    data.serviceDate = calendardate;
    data.location1 = data.address?.split(" ")[0]
    data.location2 = data.address?.split(" ")[1]
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...data,
          },
        },
      });
      console.log(result);
      Modal.success({
        content: "봉사모집 등록성공! 상세조회 페이지로 이동합니다 ",
      });
      router.push("/boards");
    } catch (error) {
      if(error instanceof Error) Modal.error({content:error.message})
    }
  };
  // 봉사 수정함수
  const onClickEdit = async (data:IBoardSubmitFormValues) => {
    const contentsvalue = editorRef.current?.getInstance().getMarkdown();
    data.contents = contentsvalue;
    data.serviceDate = calendardate;

    const myupdateBoardInput: ImyupdateBoardInput = {};

    const myVariables: IMyVariables = {
      updateBoardInput: myupdateBoardInput,
      boardId: String(router.query.boardId),
    };
    if (data.title) myupdateBoardInput.title = data.title;
    if (data.contents) myupdateBoardInput.contents = data.contents;
    if (data.centerName) myupdateBoardInput.centerName = data.centerName;
    if (data.centerOwnerName) myupdateBoardInput.centerOwnerName = data.centerOwnerName;
    if (data.centerPhone) myupdateBoardInput.centerPhone = data.centerPhone;
    if (data.serviceTime) myupdateBoardInput.serviceTime = data.serviceTime;
    if (data.serviceDate) myupdateBoardInput.serviceDate = data.serviceDate;
    if (data.address) myupdateBoardInput.address = data.address;
    if (data.addressDetail) myupdateBoardInput.addressDetail = data.addressDetail;
    if (data.location1) myupdateBoardInput.location1 = data.location1;
    if (data.location2) myupdateBoardInput.location2 = data.location2;


    try {
      const result = await updateBoard({
        variables: myVariables,
      });
      console.log(result);
      Modal.success({
        content: "봉사 모집글 수정완료! 상품 상세조회 페이지로 이동합니다",
      });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      Modal.error({ content: " 게시글 수정 오류가 발생했습니다" });
    }
  };

  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      address={address}
      onClickEdit={onClickEdit}
      handleComplete={handleComplete}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
      onClickSubmit={onClickSubmit}
      editorRef={editorRef}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      getValues={getValues}
      defaultData={props.defaultData}
    />
  );
}
