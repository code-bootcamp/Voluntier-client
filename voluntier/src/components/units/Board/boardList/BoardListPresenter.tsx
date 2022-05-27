import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import KakaomapGeolocation from "../../../commons/kakaomapGeolocation";
import Pagination from "../../../commons/pagination/PaginationContainer";
import * as S from "./BoardListStyles";

export default function BoardListUI(props) {
  const { moveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.Title>보호소 동물 친구들을 만나기 위한 방법 세 가지!</S.Title>

      <S.SearchWrapper>
        <S.SearchTitle>
          <S.Jellybean src="/images/boardList/jellybean_red.png" />
          가장 가까운 봉사를 찾아보세요
        </S.SearchTitle>
      </S.SearchWrapper>
      <S.MapWrapper>
        <KakaomapGeolocation address={""} data={undefined} />
      </S.MapWrapper>
      <S.SearchWrapper>
        <S.SearchTitle>
          {" "}
          <S.Jellybean src="/images/boardList/jellybean_yellow.png" />
          원하는 지역의 봉사를 찾아보세요
        </S.SearchTitle>
        <div style={{ display: "flex" }}>
          <S.Dropdown onChange={props.onChangeKey}>
            {props.Big.map((el, index) => (
              <S.Option id={el} key={index} value={el}>
                {el}
              </S.Option>
            ))}
          </S.Dropdown>
          <S.Dropdown onChange={props.onChangeSmall}>
            {props.S?.map((el) => (
              <option id={el} key={el} value={el}>
                {el}
              </option>
            ))}
          </S.Dropdown>
          <S.SearchButton>
            <S.SearchButtonImage
              onClick={props.onClickSearch}
              src="/images/boardList/search_button.png"
            />
          </S.SearchButton>
        </div>
      </S.SearchWrapper>
      <S.SearchWrapper>
        <S.SearchTitle>
          {" "}
          <S.Jellybean src="/images/boardList/jellybean_pink.png" />
          궁금한 키워드를 검색해보세요
        </S.SearchTitle>
        <S.Searchbar
          type="text"
          onChange={props.onChangeSearch}
          placeholder="키워드를 입력해 주세요"
        />
      </S.SearchWrapper>
      <S.TableWrapper>
        <S.TitleRow
          style={{
            fontFamily: "GmarketSans",
            borderBottom: "2px solid #b5b5b5",
          }}
        >
          <S.ColumnHeaderTitle
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            모집 내용 및 주소
          </S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic
            style={{
              fontWeight: "bold",
            }}
          >
            센터명
          </S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic
            style={{
              fontWeight: "bold",
            }}
          >
            작성일
          </S.ColumnHeaderBasic>
        </S.TitleRow>
        {props.data?.fetchBoards.map((el, index) => (
          <S.Row key={index}>
            <S.ColumnHeaderTitle onClick={moveToPage(`/boards/${el.id}`)}>
              <S.TitleBox>
                <S.TitleImage
                  src={`${
                    el.contents.includes("https")
                      ? el.contents?.slice(
                          el.contents.indexOf("https"),
                          el.contents.indexOf(")")
                        )
                      : "../../../../images/Group 8.png"
                  }`}
                />
                <S.TitleContents>
                  <S.CenterTitle>{el.title}</S.CenterTitle>
                  <S.CenterAddress>{el.address}</S.CenterAddress>
                </S.TitleContents>
              </S.TitleBox>
            </S.ColumnHeaderTitle>
            <S.ColumnHeaderBasic>{el.centerName}</S.ColumnHeaderBasic>
            <S.ColumnHeaderDate>{el.createdAt.slice(2, 10)}</S.ColumnHeaderDate>
            <S.ColumnHeaderBasic style={{ display: "none" }}>
              {el.location1}
            </S.ColumnHeaderBasic>
            <S.ColumnHeaderBasic style={{ display: "none" }}>
              {el.location2}
            </S.ColumnHeaderBasic>
          </S.Row>
        ))}
      </S.TableWrapper>
      <Pagination
        data={props.data}
        BoardsCountData={props.BoardsCountData}
        refetch={props.refetch}
      />
    </S.Wrapper>
  );
}
