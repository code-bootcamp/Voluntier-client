import KakaoMap from "../../../commons/kakaomap";
import * as S from "./BoardWriteStyles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import dynamic from "next/dynamic";
import Mycalendar from "../../../../components/commons/calendar";
import { IPropsBoardWriteUI } from "./BoardWriteTypes";



const EditorUI = dynamic(() => import("../../../commons/texteditor/editor"), {
  ssr: false,
});
const EditorUInonEdit = dynamic(() => import("../../../commons/texteditor/editor2"), {
  ssr: false,
});

export default function BoardWriteUI(props: IPropsBoardWriteUI) {
  return (
    <>
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickSubmit
        )}
      >
        <S.Wrapper>
          <S.TitleWrapper>
            <S.Title>Title</S.Title>
            <S.TitleInput
              defaultValue={props.defaultData?.fetchBoard.title || ""}
              placeholder="제목을 입력해주세요"
              {...props.register("title")}
            />
          </S.TitleWrapper>
          <S.InputWrapper>
            <S.InputWrapperLeft>
              <S.Map>
                <KakaoMap
                  address={
                    props.address || props.defaultData?.fetchBoard.address || ""
                  }
                />
              </S.Map>
            </S.InputWrapperLeft>
            <S.InputWrapperRight>
              <S.LabelWrapper>
                <S.LabelImage src="/images/boardWrite/manager.png" />
                <S.Label>센터 대표</S.Label>
              </S.LabelWrapper>
              <S.SmallInputWrapper>
                <S.SmallInput
                  type="text"
                  placeholder="대표자 이름을 입력해주세요"
                  defaultValue={props.defaultData?.fetchBoard.centerOwnerName || ""}
                  {...props.register("centerOwnerName")}
                />
              </S.SmallInputWrapper>
              <S.LabelWrapper>
                <S.LabelImage src="/images/boardWrite/center.png" />
                <S.Label>센터명 / 전화번호</S.Label>
              </S.LabelWrapper>
              <S.SmallInputWrapper>
                <S.SmallInput
                  placeholder="센터명을 입력해주세요"
                  {...props.register("centerName")}
                  defaultValue={props.defaultData?.fetchBoard.centerName || ""}
                  style={{ marginBottom: "8px" }}
                />
                <S.SmallInput
                  placeholder="센터 전화번호를 입력해주세요"
                  {...props.register("centerPhone")}
                  defaultValue={props.defaultData?.fetchBoard.centerPhone || ""}
                />
              </S.SmallInputWrapper>
              <S.HalfWrapper>
                <S.Volun>
                  <S.LabelWrapper>
                    <S.LabelImage src="/images/boardWrite/time.png" />
                    <S.Label>봉사 소요 시간</S.Label>
                  </S.LabelWrapper>
                  <S.TimeWrapper>
                    <S.SmallInput type='number'
                      {...props.register("serviceTime")}
                      defaultValue={props.defaultData?.fetchBoard.serviceTime || ""}
                      style={{ width: "25%" }}
                    />
                    <S.Time>시간</S.Time>
                  </S.TimeWrapper>
                </S.Volun>
              </S.HalfWrapper>
              <S.DateWrapper>
                <S.LabelWrapper>
                  <S.LabelImage src="/images/boardWrite/calendar.png" />
                  <S.Label>봉사 날짜</S.Label>
                </S.LabelWrapper>
                <Mycalendar
                  isEdit={props.isEdit}
                  defaultData={props.defaultData}
                />
              </S.DateWrapper>
              <S.LabelWrapper>
                <S.LabelImage src="/images/boardWrite/location.png" />
                <S.Label>센터주소</S.Label>
                <S.SearchButton onClick={props.showModal} type="button">
                  주소검색
                </S.SearchButton>
              </S.LabelWrapper>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <S.Address
                  readOnly
                  value={props.address || props.defaultData?.fetchBoard.address || ""}
                  onChange={props.setValue(
                    "address",
                    props.address || props.defaultData?.fetchBoard.address || ""
                  )}
                />
                <S.AddressDetail
                  placeholder="상세주소를 입력해주세요"
                  {...props.register("addressDetail")}
                  defaultValue={props.defaultData?.fetchBoard.addressDetail || ""}
                />
              </div>
            </S.InputWrapperRight>
          </S.InputWrapper>

          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/activity.png" />
            <S.Label>활동 내용</S.Label>
          </S.LabelWrapper>
          {props.isEdit?  
          <EditorUI
            editorRef={props.editorRef}
            defaultData={props.defaultData}
          />:
          <EditorUInonEdit editorRef={props.editorRef}></EditorUInonEdit>}
          <S.SubmitButton>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
          {props.isModalVisible && (
            <Modal
              visible={true}
              onOk={props.handleOk}
              onCancel={props.handleCancel}
            >
              <DaumPostcode onComplete={props.handleComplete} />
            </Modal>
          )}
        </S.Wrapper>
      </form>
    </>
  );
}
