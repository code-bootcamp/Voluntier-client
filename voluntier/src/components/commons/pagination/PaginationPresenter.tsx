import * as S from "./PaginationStyles";
import { IPropsPaginationUI } from "./PaginationTypes";
import { v4 as uuidv4 } from 'uuid';



export default function PaginationUI(props: IPropsPaginationUI) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Prev
          disabled={props.startPage === 1}
          onClick={props.onClickPrevPage}
        >
          &#60;
        </S.Prev>
        {new Array(10).fill(1).map((_, index) =>
          index + props.startPage <= props.lastPage ? (
            <S.Page
              style={{
                cursor: "pointer",
                color:
                  props.active === String(index + props.startPage)
                    ? "#FF602A"
                    : "#000000",
              }}
              key={index + props.startPage}
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
            >
              {index + props.startPage}
            </S.Page>
          ) : (
            <span key={uuidv4()}></span>
          )
        )}
        <S.Next
          onClick={props.onClickNextPage}
          disabled={props.startPage + 10 > props.lastPage}
        >
          &#62;
        </S.Next>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
