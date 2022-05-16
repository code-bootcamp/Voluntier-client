import * as S from './ProductListStyles'

export default function ProductListUI(props){


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
                <S.ProductImage onClick={props.MoveProduct} id={el.id}></S.ProductImage>
                <S.ProductName>{el.name}</S.ProductName>
                <S.ProductPrice>{el.price}원</S.ProductPrice>
            </S.ProductWrapper>
                ))}
        </S.Contents>
    </S.Wrapper>
    
    </>
    )
}