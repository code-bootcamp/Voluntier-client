import KakaomapGeolocation from "../../../commons/kakaomapGeolocation";
import Pagination from "../../../commons/Pagination/pagination.container";
import * as S from "./BoardListStyles";

export default function BoardListUI(props) {
 
 

  return (
    <S.Wrapper>
      <S.DogBiscuit>Apply</S.DogBiscuit>
      <S.MapWrapper>
        <KakaomapGeolocation />
      </S.MapWrapper>
      <S.SearchWrapper>
        
      <S.Dropdown onChange={props.onChangeKey}>
          {props.Big.map((el,index) => (
          <option id={el} key={index} value={el}>
            {el}
          </option>
          ))}
        </S.Dropdown>
        <S.Dropdown onChange={props.onChangeSmall}>
          {props.S?.map((el)=>(
          <option id={el} key={el} value={el}>{el}</option>
          ))}
        </S.Dropdown>
        <S.SearchButton>
          <S.SearchButtonImage onClick={props.onClickSearch} src="/images/boardList/search_button.png" />
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
        {props.data?.fetchBoards.map((el,index)=>(
        <S.Row key={index}>
          <S.ColumnHeaderBasic>{index+1}</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>{el.title}</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>{el.centerName}</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>{el.createdAt.slice(0,10)}</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic style={{display:"none"}}>{el.location1}</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic style={{display:"none"}}>{el.location2}</S.ColumnHeaderBasic>
        </S.Row>
        ))}
      </S.TableWrapper>
    <Pagination data={props.data} BoardsCountData={props.BoardsCountData} refetch={props.refetch}/>
    </S.Wrapper>
  );
}
