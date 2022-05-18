import * as S from './ProductListStyles'
import { useMoveToPage } from '../../../commons/hooks/useMoveToPage';
import { MouseEvent } from "react";
import { gql, useQuery } from '@apollo/client';
interface IPropsProductListUI{
    data:any
    MoveProduct : (event:MouseEvent<HTMLImageElement>) => void
}
const FETCH_USER_LOGIN = gql`
    query fetchLoginUser{
        fetchLoginUser{
            id
            name
            email
            phone
            isAdmin
        }
    }
`

export default function ProductListUI(props:IPropsProductListUI){
    const {moveToPage} = useMoveToPage()
    const {data} = useQuery(FETCH_USER_LOGIN)
    // console.log(data.isAdmin)
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
        {data?.fetchLoginUser.isAdmin?
        <button onClick={moveToPage('/products/new')}>상품등록</button>
        :
        <></>}
    </S.Wrapper>
    </>
    )
}