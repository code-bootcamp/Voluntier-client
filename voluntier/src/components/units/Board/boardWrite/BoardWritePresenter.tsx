import KakaoMap from "../../../commons/kakaomap";
import * as S from "./BoardWriteStyles";
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';
import dynamic from 'next/dynamic'
import { IPropsBoardWriteUI } from "./BoardWriteTypes";
import Mycalendar from "../../../commons/calendar";


const EditorUI = dynamic(()=>import('../../../commons/texteditor/editor'),{ssr:false})




export default function BoardWriteUI(props:IPropsBoardWriteUI) {

  
  
  


  return (
    <>
    <form onSubmit={props.handleSubmit(props.isEdit ? props.onClickEdit : props.onClickSubmit)}>

    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>Title</S.Title>
        <S.TitleInput defaultValue={props.defaultData?.fetchBoard.title}placeholder="제목 입력" {...props.register("title")}/>
      </S.TitleWrapper>
      <S.InputWrapper>
        <S.InputWrapperLeft>
          <S.Map>
            <KakaoMap address={props.address || props.defaultData?.fetchBoard.address}/>
          </S.Map>
        </S.InputWrapperLeft>
        <S.InputWrapperRight>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/manager.png" />
            <S.Label>센터 대표</S.Label>
          </S.LabelWrapper>
          <S.SmallInputWrapper>
            <S.SmallInput type="text" placeholder="대표자 이름 입력" defaultValue={props.defaultData?.fetchBoard.centerOwnerName} {...props.register("centerOwnerName")} />
          </S.SmallInputWrapper>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/center.png" />
            <S.Label>센터명</S.Label>
          </S.LabelWrapper>
          <S.SmallInputWrapper>
            <S.SmallInput placeholder="센터명 입력" {...props.register("centerName")} defaultValue={props.defaultData?.fetchBoard.centerName}/>
            <S.SmallInput placeholder="센터 전화번호 입력" {...props.register("centerPhone")} defaultValue={props.defaultData?.fetchBoard.centerPhone}/>
          </S.SmallInputWrapper>
          <S.HalfWrapper>
            <S.Volun>
              <S.LabelWrapper>
                <S.LabelImage src="/images/boardWrite/time.png" />
                <S.Label>봉사 소요 시간</S.Label>
              </S.LabelWrapper>
              <S.SmallInput type="number" {...props.register("serviceTime")} defaultValue={props.defaultData?.fetchBoard.serviceTime}/>
              시간
            </S.Volun>
            <S.Volun>
              <S.LabelWrapper>
                <S.LabelImage src="/images/boardWrite/volunteer.png" />
                <S.Label>봉사 인원</S.Label>
              </S.LabelWrapper>
              <S.SmallInput type="number"{...props.register("recruitCount")} defaultValue={props.defaultData?.fetchBoard.recruitCount}/>명
            </S.Volun>
          </S.HalfWrapper>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/calendar.png" />
            <S.Label>봉사 날짜</S.Label>
          </S.LabelWrapper>
          <S.LabelWrapper>
          <Mycalendar
          defaultData={props.defaultData}
          />
          </S.LabelWrapper>
            <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/location.png"/>
            <S.Label>상세주소</S.Label>
            <S.SearchButton onClick={props.showModal} type= "button">지역 선택</S.SearchButton>
            </S.LabelWrapper>
            <S.Address readOnly value={props.address || props.defaultData?.fetchBoard.address} onChange={props.setValue("address",props.address || props.defaultData?.fetchBoard.address)}/>
          <S.AddressDetail {...props.register("addressDetail")} defaultValue={props.defaultData?.fetchBoard.addressDetail}/>
          
        </S.InputWrapperRight>
      </S.InputWrapper>

      <S.LabelWrapper>
        <S.LabelImage src="/images/boardWrite/activity.png" />
        <S.Label>활동 내용</S.Label>
      </S.LabelWrapper>
      <EditorUI 
      editorRef={props.editorRef} 
      defaultData={props.defaultData}

      />
      
      <S.SubmitButton>{props.isEdit? "수정하기":"등록하기"}</S.SubmitButton>
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
