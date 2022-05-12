import * as S from "./BoardListStyles";

export default function BoardListUI() {
  return (
    <S.Wrapper>
      <S.DogBiscuit src="/images/boardList/dog_biscuit.png" />
      <S.UrgentList>
        <S.Urgent>
          <S.DeadLine>D-{}</S.DeadLine>
          <S.Detail>모집인원: {}</S.Detail>
          <S.Detail>{}</S.Detail>
        </S.Urgent>
      </S.UrgentList>
      <S.SearchWrapper>
        <S.Dropdown>
          <option></option>
        </S.Dropdown>
        <S.Dropdown>
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
