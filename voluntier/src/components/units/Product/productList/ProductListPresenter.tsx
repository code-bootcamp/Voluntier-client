import * as S from './ProductListStyles'
import { MouseEvent } from "react";
interface IPropsProductListUI{
    data:any
    MoveProduct : (event:MouseEvent<HTMLImageElement>) => void
}

export default function ProductListUI(props:IPropsProductListUI){


    return (
    <>
    <S.Wrapper>
        <S.Title>
            <S.Image>Jelly Shop</S.Image>
            <S.Search>
             <S.SearchImage src='/images/boardList/search_button.png'></S.SearchImage>
             <S.SearchContents placeholder='상품검색'></S.SearchContents>
            </S.Search>
        </S.Title>
        <S.Contents>
            {props.data?.fetchProducts.map((el)=>(             
                <S.ProductWrapper key={el.id}>
                <S.ProductImage  onClick={props.MoveProduct} id={el.id} src={`https://storage.googleapis.com/${el.productImage[0]?.imageUrl}`}/>
                <S.ProductName>{el.name}</S.ProductName>
                <S.ProductPrice>{el.price}원</S.ProductPrice>
            </S.ProductWrapper>
                ))}
        </S.Contents>
    </S.Wrapper>
    
    </>
    )
}