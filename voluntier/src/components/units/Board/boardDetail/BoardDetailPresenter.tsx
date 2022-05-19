import KakaoMap from "../../../commons/kakaomap";
import dynamic from 'next/dynamic'
import VolunteerList from "../../../commons/volunteerList";
import * as S from "./BoardDetailStyles";

const ToastUIViewer = dynamic(()=>import('../../../commons/texteditor/viewer'),{ssr:false})


export default function BoardDetailUI(props) {
  console.log(props.data)

  return (
   <div>

    <S.Wrapper>
        <S.TitleWrapper>
          <S.TitleLabel>Title</S.TitleLabel>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
        </S.TitleWrapper>
    <S.InnerWrapper>
            <S.InnerWrapperLeft>
              <S.InnerWrapperLeftUpper>
                <S.InfoWrapper>
                <S.InfoLeftWrapper>
                  <S.Map>
                    <KakaoMap data= {props.data}/>
                  </S.Map>
                  <S.LocationWrapper>
                    <S.LabelImage src="/images/boardWrite/location.png" />
                    <S.Location>{props.data?.fetchBoard?.address} , {props.data?.fetchBoard?.addressDetail}</S.Location>
                  </S.LocationWrapper>
                </S.InfoLeftWrapper>
              <S.InfoRightWrapper>
                <S.InfoDetailWrapper>
                  <S.LabelImage src="/images/boardWrite/center.png" />
                  <S.Label>센터명</S.Label>
                  <S.Detail>{props.data?.fetchBoard?.centerName}</S.Detail>
                </S.InfoDetailWrapper>
                <S.InfoDetailWrapper>
                  <S.LabelImage src="/images/boardWrite/phone.png" />
                  <S.Label>센터 전화번호</S.Label>
                  <S.Detail>{props.data?.fetchBoard?.centerPhone}</S.Detail>
                </S.InfoDetailWrapper>
                <S.InfoDetailWrapper>
                  <S.LabelImage src="/images/boardWrite/time.png" />
                  <S.Label>봉사 소요 시간</S.Label>
                  <S.Detail>약 {props.data?.fetchBoard?.serviceTime}시간 예상</S.Detail>
                </S.InfoDetailWrapper>
                <S.InfoDetailWrapper>
                  <S.LabelImage src="/images/boardWrite/calendar.png" />
                  <S.Label>봉사 날짜</S.Label>
                  <S.Detail>{props.data?.fetchBoard?.serviceDate.slice(0,10)}</S.Detail>
                </S.InfoDetailWrapper>
                <div style={{ marginBottom: "20px" }}>
                <S.InfoDetailWrapper>
                  <S.QuestionIcon/>
                  <S.Label>문의 방법</S.Label>
                </S.InfoDetailWrapper>
                <S.Detail style={{ marginLeft: "30px" }}>
                  ① 전화 문의
                </S.Detail>
                <S.Detail style={{ marginLeft: "30px" }}>
                  ② 센터 라이브톡으로 문의
                </S.Detail>
                </div>
                <S.Note>
                  ※자원봉사에 신청, 참가하시기 전에 기관, 단체 및 시설에 대해 한
                  번 더! 자세히 알아보세요.
                </S.Note>
                <S.Note>
                  ※자원봉사 모집 글은 기관, 단체 및 시설에서 자발적으로 게시한
                  것이며, VolunTier는 게시장소만 제공할 뿐 해당 게시글에 대한
                  책임이 없음을 알려드립니다.
                </S.Note>
                </S.InfoRightWrapper>
                </S.InfoWrapper>
                <S.ContentsWrapper>
                <S.ContentsDetailWrapper>
                  <S.DetailDisplay>                  
                    <S.LabelImage src="/images/boardWrite/activity.png" />
                    <S.Label>활동 내용</S.Label>
                  </S.DetailDisplay>
                  <ToastUIViewer data={props.data}/>
                </S.ContentsDetailWrapper>
              </S.ContentsWrapper>
            </S.InnerWrapperLeftUpper>
            <S.ButtonWrapper>
              {props.data?.fetchBoard?.user.id === props.Userdata?.fetchLoginUser.id
              ?
              <>
              <S.EditButton onClick={props.onClickEdit}>수정하기</S.EditButton>
              <S.DeleteButton onClick={props.DeleteBoard}>삭제하기</S.DeleteButton>
              </>
              :
              <>
              <S.ApplyButton onClick={props.CreateEnroll}>신청하기</S.ApplyButton>
              </>
              }
            </S.ButtonWrapper>
        </S.InnerWrapperLeft>
        <S.InnerWrapperRight>
          <S.TalkWrapper>
            <S.TalkHeader/>
            <S.TalkContents/>
            <S.TalkWrite placeholder="센터의 궁금한 점을 물어보세요! 실시간으로 답변해드립니다!"></S.TalkWrite>
          </S.TalkWrapper>
          <VolunteerList 
          enrolldata={props.enrolldata}
          boarddata={props.data?.fetchBoard}
          Userdata={props.Userdata}
          
          />
        </S.InnerWrapperRight>
        
      </S.InnerWrapper>
      
    </S.Wrapper>
          </div>
  );
}
