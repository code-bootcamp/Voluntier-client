import KakaomapForBoardList from "../../../commons/kakaomapForBoardList";
import * as S from "./BoardListStyles";

export default function BoardListUI() {
  return (
    <S.Wrapper>
      <S.DogBiscuit>Apply</S.DogBiscuit>
      <S.MapWrapper>
        <KakaomapForBoardList />
      </S.MapWrapper>
      <S.SearchWrapper>
        <S.Dropdown>
          <option disabled={true}>전국</option>
          <option></option>
          <option></option>
          <option></option>
        </S.Dropdown>
        <S.Dropdown>
          <option disabled={true}>상세</option>
          <option></option>
          <option></option>
          <option></option>
        </S.Dropdown>
        <div>서치바 컴포넌트 자리</div>
        <S.SearchButton>
          <S.SearchButtonImage src="/images/boardList/search_button.png" />
        </S.SearchButton>
      </S.SearchWrapper>
      <S.TableWrapper>
        <S.Row style={{ backgroundColor: "#E3E3E3" }}>
          <S.ColumnHeaderBasic style={{ fontWeight: "bold" }}>
            번호
          </S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle style={{ fontWeight: "bold" }}>
            제목
          </S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic style={{ fontWeight: "bold" }}>
            작성자
          </S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic style={{ fontWeight: "bold" }}>
            작성일
          </S.ColumnHeaderBasic>
        </S.Row>
        <S.Row>
          <S.ColumnHeaderBasic></S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle></S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic></S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic></S.ColumnHeaderBasic>
        </S.Row>
      </S.TableWrapper>
      <div>페이지네이션 컴포넌트 자리</div>
    </S.Wrapper>
  );
}
