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
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>

    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>Title</S.Title>
        <S.TitleInput placeholder="제목 입력" {...props.register("title")}/>
      </S.TitleWrapper>
      <S.InputWrapper>
        <S.InputWrapperLeft>
          <S.Map>
            <KakaoMap address={props.address}/>
          </S.Map>
        </S.InputWrapperLeft>
        <S.InputWrapperRight>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/manager.png" />
            <S.Label>센터 대표</S.Label>
          </S.LabelWrapper>
          <S.SmallInputWrapper>
            <S.SmallInput type="text" placeholder="대표자 이름 입력" {...props.register("centerOwnerName")} />
            <S.SmallInput type="text" placeholder="대표자 전화번호 입력"/>
          </S.SmallInputWrapper>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/center.png" />
            <S.Label>센터명</S.Label>
          </S.LabelWrapper>
          <S.SmallInputWrapper>
            <S.SmallInput placeholder="센터명 입력" {...props.register("centerName")}/>
            <S.SmallInput placeholder="센터 전화번호 입력" {...props.register("centerPhone")}/>
          </S.SmallInputWrapper>
          <S.HalfWrapper>
            <S.Volun>
              <S.LabelWrapper>
                <S.LabelImage src="/images/boardWrite/time.png" />
                <S.Label>봉사 소요 시간</S.Label>
              </S.LabelWrapper>
              <S.SmallInput type="number" {...props.register("serviceTime")}/>
              시간
            </S.Volun>
            <S.Volun>
              <S.LabelWrapper>
                <S.LabelImage src="/images/boardWrite/volunteer.png" />
                <S.Label>봉사 인원</S.Label>
              </S.LabelWrapper>
              <S.SmallInput type="number"{...props.register("recruitCount")} />명
            </S.Volun>
          </S.HalfWrapper>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/calendar.png" />
            <S.Label>봉사 날짜</S.Label>
          </S.LabelWrapper>
          <S.LabelWrapper>
          <Mycalendar/>
          </S.LabelWrapper>
            <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/location.png"/>
            <S.Label>상세주소</S.Label>
            <S.SearchButton onClick={props.showModal} type= "button">지역 선택</S.SearchButton>
            </S.LabelWrapper>
            <S.Address readOnly value={props.address} {...props.register("address")}/>
          <S.AddressDetail {...props.register("addressDetail")}/>
          
        </S.InputWrapperRight>
      </S.InputWrapper>

      <S.LabelWrapper>
        <S.LabelImage src="/images/boardWrite/activity.png" />
        <S.Label>활동 내용</S.Label>
      </S.LabelWrapper>
      <EditorUI editorRef={props.editorRef}/>
      
      <S.SubmitButton onClick={props.onClickSubmit}>등록하기</S.SubmitButton>
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
  );
}
